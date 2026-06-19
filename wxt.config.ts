import { defineConfig } from 'wxt';

export default defineConfig({
	srcDir: 'src',
	modules: ['@wxt-dev/module-solid', './modules/compile-registry.ts'],
	manifest: {
		name: 'RED Detector Web Extension',
		description: 'Detect technologies used by the current website.',
		version: '0.1.0',
		action: {
			default_title: 'Detect technologies',
			default_popup: 'popup.html',
		},
		permissions: ['activeTab', 'scripting', 'storage', 'tabs'],
		host_permissions: [],
	},
});
