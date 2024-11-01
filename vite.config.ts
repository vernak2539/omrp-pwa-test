import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/omrp-pwa-test/",
  plugins: [
    react(),
    legacy({
      targets: ["chrome>=59"],
      modernTargets: [
        "edge>=79, firefox>=67, chrome>=59, safari>=12, chromeAndroid>=64, iOS>=12",
      ],
    }),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
        integration: {
          baseUrl: "https://vernak2539.github.io/omrp-pwa-test/",
        },
      },

      manifest: {
        name: "omrp-pwa-test",
        short_name: "omrp-pwa-test",
        description: "omrp-pwa-test",
        theme_color: "#ffffff",
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: false,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
});
