import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  publicDir: "../assets",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sobre: resolve(__dirname, "sobre.html"),
        "trafego-pago": resolve(__dirname, "servico-trafego-pago.html"),
        "email-marketing": resolve(__dirname, "servico-email-marketing.html"),
        "loja-virtual": resolve(__dirname, "servico-loja-virtual.html"),
        seo: resolve(__dirname, "servico-seo.html"),
        "midia-social": resolve(__dirname, "servico-midia-social.html"),
      },
    },
  },
});
