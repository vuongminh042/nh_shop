// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        shop: resolve(__dirname, "./shop.html"),
        cart: resolve(__dirname, "./giohang.html"),
        pay: resolve(__dirname, "./thanhtoan.html"),
        products: resolve(__dirname, "./product-details.html"),
      },
    },
  },
});
