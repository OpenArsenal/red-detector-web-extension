import { dirname, resolve } from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';

import { addAlias, defineWxtModule } from 'wxt/modules';
import type { Wxt } from 'wxt';

const COMPILED_REGISTRY_ALIAS = '#/compiled-registry';

/**
 * Compiled registry generation runs before WXT type preparation and builds.
 *
 * Technology definitions stay authored as TypeScript, but the background imports
 * a generated module from WXT's generated directory. That keeps generated files
 * out of `src/` while still letting Vite resolve a normal module alias during
 * development, tests, and production builds.
 */
export default defineWxtModule({
	setup(wxt) {
		const outputPath = resolve(wxt.config.wxtDir, './compiled-registry.js');
		addAlias(wxt, COMPILED_REGISTRY_ALIAS, outputPath);

		let generation: Promise<void> | undefined;
		const generate = async () => {
			generation ??= generateCompiledRegistryModule(wxt, outputPath);
			return generation;
		};

		wxt.hooks.hook('config:resolved', generate);
		wxt.hook('build:before', generate);
	},
});

async function generateCompiledRegistryModule(
	wxt: Wxt,
	outputPath: string,
): Promise<void> {
	const root = wxt.config.root;
	try {
		const [{ technologies }, { compileTechnologyRegistry }, { renderPrecompiledRegistryModule }] = await Promise.all([
			import(resolve(root, 'src/data/technologies.ts')),
			import(resolve(root, 'src/lib/registry/index.ts')),
			import(resolve(root, 'src/lib/registry/precompiled-module.ts')),
		]);
		const artifact = compileTechnologyRegistry({
			technologies,
			sourceKind: 'typescript-definition',
		});
		const source = renderPrecompiledRegistryModule({
			artifact,
			generatorPath: 'modules/compile-registry.ts',
		});

		await mkdir(dirname(outputPath), { recursive: true });
		await writeFile(outputPath, source);
		await writeFile(getDeclarationPath(outputPath), renderGeneratedDeclarationModule());
		wxt.logger.info(`Generated compiled registry artifact with ${artifact.technologies.length} technologies and ${artifact.matcherIndex.ruleCount} rules`);
	} catch (error) {
		await mkdir(dirname(outputPath), { recursive: true });
		await writeFile(outputPath, renderRuntimeFallbackModule(error));
		await writeFile(getDeclarationPath(outputPath), renderGeneratedDeclarationModule());
		wxt.logger.warn('Compiled registry generation failed; generated runtime fallback module instead.');
	}
}

function renderRuntimeFallbackModule(error: unknown): string {
	const message = error instanceof Error ? error.message : String(error);
	return [
		'/**',
		' * Generated fallback by modules/compile-registry.ts.',
		' * The optimized registry artifact could not be generated, so extension',
		' * runtime falls back to compiling the bundled TypeScript registry once.',
		' */',
		"import { technologies } from '../../src/data/technologies';",
		"import { compileTechnologyRegistry } from '../../src/lib/registry';",
		'',
		`console.warn('[red-detector] using runtime registry fallback because build-time generation failed: ${message.replace(/'/g, "\\'")}');`,
		'export const precompiledRegistryArtifact = compileTechnologyRegistry({',
		'\ttechnologies,',
		"\tsourceKind: 'typescript-definition',",
		'});',
		'',
	].join('\n');
}

function renderGeneratedDeclarationModule(): string {
	return [
		"import type { CompiledTechnologyRegistryArtifact } from '../../src/lib/registry';",
		'export declare const precompiledRegistryArtifact: CompiledTechnologyRegistryArtifact;',
		'',
	].join('\n');
}

function getDeclarationPath(outputPath: string): string {
	return outputPath.replace(/\.js$/, '.d.ts');
}
