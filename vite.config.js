import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  server: {
    host: true,      // listen on all interfaces (required for mobile access)
    port: 5173,      // optional, default is 5173
    hmr: { overlay: false }, // optional: disable HMR error overlay on mobile
  },
});
