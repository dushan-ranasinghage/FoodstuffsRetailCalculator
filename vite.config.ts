import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    // Use happy-dom to avoid jsdom/parse5 ESM require issues in the test environment
    environment: "happy-dom",
    setupFiles: ["./src/testing/setup-tests.ts"],
  },
});
