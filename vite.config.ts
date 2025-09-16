import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), visualizer({ open: true })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // react-dom
            if (id.includes("react-dom")) {
              return "vender-react-dom";
            }
            // react
            if (id.includes("react")) {
              return "vender-react";
            }
            // antd
            if (id.includes("antd") || id.includes("@ant-design")) {
              return "vender-antd";
            }
            // redux
            if (id.includes("redux") || id.includes("@reduxjs")) {
              return "vender-redux";
            }
            // others
            return "vender";
          }
        },
      },
    },
  },
});
