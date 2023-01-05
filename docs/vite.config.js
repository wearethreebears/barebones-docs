import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@barebones": fileURLToPath(
        new URL(
          "../node_modules/@wearethreebears/barebones/src",
          import.meta.url
        )
      ),
      "@barebones-local": fileURLToPath(
        new URL("../barebones", import.meta.url)
      ),
    },
  },
});
