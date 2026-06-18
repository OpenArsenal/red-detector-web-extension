import { dirname, resolve } from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';

import { defineWxtModule } from 'wxt/modules';

/**
 * Compiled registry generation runs before WXT bundles the extension.
 *
 * Technology definitions stay authored as TypeScript, but the background imports
 * a generated artifact that already contains matcher buckets, relationship
 * tables, and the extension collection plan. The popup path therefore avoids
 * rebuilding those structures when the service worker wakes for a first scan.
 */
export default defineWxtModule({
	setup(wxt) {
		wxt.hook('build:before', async () => {
			const root = wxt.config.root;
			const outputPath = resolve(root, 'src/generated/compiled-registry.ts');
			const [{ technologies }, { compileTechnologyRegistry }, { renderPrecompiledRegistryModule }] = await Promise.all([
				import('../src/data/technologies'),
				import('../src/lib/registry'),
				import('../src/lib/registry/precompiled-module'),
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
			wxt.logger.info(`Generated compiled registry artifact with ${artifact.technologies.length} technologies and ${artifact.matcherIndex.ruleCount} rules`);
		});
	},
});
