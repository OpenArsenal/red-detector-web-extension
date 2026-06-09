import { defineConfig } from "wxt";

export default defineConfig({
  srcDir: "src",
  modules: ["@wxt-dev/module-solid"],
  manifest: {
    name: "RED Detector Web Extension",
    description: "Detect technologies used by the current website.",
    version: "0.1.0",
    manifest_version: 3,
    action: {
      default_title: "Detect technologies",
      default_popup: "popup.html",
    },
    permissions: ["activeTab", "tabs", "storage", "scripting"],
    host_permissions: [],
    optional_host_permissions: ["http://*/*", "https://*/*"],
  },
});
