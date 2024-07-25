/// <reference types="vitest" />

import { defineConfig, mergeConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

import path from "path";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const viteTestConfig = defineVitestConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});

const viteAppConfig = defineConfig({
  plugins: [react(), nodeResolve()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        contentScript: path.resolve(
          __dirname,
          "src/extension-scripts/contentScript.ts"
        ),
        background: path.resolve(
          __dirname,
          "src/extension-scripts/background.ts"
        ),
        injectCygnus: path.resolve(
          __dirname,
          "src/extension-scripts/injectCygnus.ts"
        ),
        index: path.resolve(__dirname, "./index.html"),
      },
      output: {
        entryFileNames: "js/[name].js",
      },
    },
  },
});

export default mergeConfig(viteAppConfig, viteTestConfig);
