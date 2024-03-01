import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/app/utils/test/setupTests.ts",
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src/app") }],
  },
});
