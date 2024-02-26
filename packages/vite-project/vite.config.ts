import { UserConfig, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuejsx from "@vitejs/plugin-vue-jsx";

export const viteConfig: UserConfig = {
    base: "/",
    plugins: [vue(), vuejsx()],
    alias: {
        vue: "vue/dist/vue.esm-bundler.js",
    },
    css: {
        preprocessorOptions: {
            scss: {},
        },
    },
};

// https://vitejs.dev/config/
export default defineConfig(viteConfig);
