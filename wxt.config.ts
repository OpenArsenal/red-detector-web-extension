import { defineConfig } from "wxt";

export default defineConfig({
  srcDir: "src",
  modules: ["@wxt-dev/module-solid"],
  manifest: {
    name: "RED Detector Web Extension",
    description: "Collect a bounded extraction payload from the current website.",
    version: "0.1.0",
    action: {
      default_title: "Detect technologies",
      default_popup: "popup.html",
    },
    permissions: ["activeTab", "tabs", "storage", "scripting", "cookies"],
    host_permissions: [],
  },
});
