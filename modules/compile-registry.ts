import { dirname, resolve } from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';

import { addAlias, defineWxtModule } from 'wxt/modules';
import type { Wxt } from 'wxt';

const COMPILED_REGISTRY_ALIAS = '#/compiled-registry';
const COMPILED_REGISTRY_ASSET = 'compiled-registry.js';

/**
 * Compiled registry generation runs before WXT type preparation and builds.
 *
 * Technology definitions stay authored as TypeScript, but the background loads a
 * generated registry asset at runtime instead of importing the generated module
 * through Vite. That keeps the large compiled registry out of the background's
 * eager bundle while still shipping it inside the extension package.
 */
export default defineWxtModule({
	setup(wxt) {
		const assetPath = resolve(wxt.config.wxtDir, COMPILED_REGISTRY_ASSET);
		const typeAliasPath = resolve(wxt.config.wxtDir, './compiled-registry.js');
		addAlias(wxt, COMPILED_REGISTRY_ALIAS, typeAliasPath);

		let generation: Promise<void> | undefined;
		const generate = async () => {
			generation ??= generateCompiledRegistryModule(wxt, assetPath, typeAliasPath);
			return generation;
		};

		wxt.hooks.hook('config:resolved', generate);
		wxt.hook('build:before', generate);
	},
});

async function generateCompiledRegistryModule(
	wxt: Wxt,
	assetPath: string,
	typeAliasPath: string,
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

		await writeGeneratedModules({ assetPath, typeAliasPath, source });
		wxt.logger.info(`Generated compiled registry artifact with ${artifact.technologies.length} technologies and ${artifact.matcherIndex.ruleCount} rules`);
	} catch (error) {
		const source = renderRuntimeFallbackModule(error);
		await writeGeneratedModules({ assetPath, typeAliasPath, source });
		wxt.logger.warn('Compiled registry generation failed; generated runtime fallback module instead.');
	}
}

async function writeGeneratedModules(input: {
	readonly assetPath: string;
	readonly typeAliasPath: string;
	readonly source: string;
}): Promise<void> {
	await mkdir(dirname(input.assetPath), { recursive: true });
	await mkdir(dirname(input.typeAliasPath), { recursive: true });
	await writeFile(input.assetPath, input.source);
	await writeFile(input.typeAliasPath, input.source);
	await writeFile(getDeclarationPath(input.typeAliasPath), renderGeneratedDeclarationModule());
}

function renderRuntimeFallbackModule(error: unknown): string {
	const message = error instanceof Error ? error.message : String(error);
	return [
		'/**',
		' * Generated fallback by modules/compile-registry.ts.',
		' * The optimized registry artifact could not be generated, so extension',
		' * runtime falls back to compiling the bundled TypeScript registry once.',
		' */',
		"import { technologies } from '../src/data/technologies';",
		"import { compileTechnologyRegistry } from '../src/lib/registry';",
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
		"import type { CompiledTechnologyRegistryArtifact } from '../src/lib/registry';",
		'export declare const precompiledRegistryArtifact: CompiledTechnologyRegistryArtifact;',
		'',
	].join('\n');
}

function getDeclarationPath(outputPath: string): string {
	return outputPath.replace(/\.js$/, '.d.ts');
}
