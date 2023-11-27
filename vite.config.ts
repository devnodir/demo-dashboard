import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugIn: Partial<VitePWAOptions> = {
    registerType: "autoUpdate",
    mode: "production",
    includeAssets: [
        "favicon.ico",
        "apple-touc-icon.png",
        "masked-icon.svg",
        "assets/*.svg",
    ],
    manifest: {
        name: "Demo med",
        short_name: "demo-med",
        description: "Created by devnodir",
        icons: [
            {
                src: "images/icons/icon-72x72.png",
                sizes: "72x72",
                type: "image/png",
            },
            {
                src: "images/icons/icon-96x96.png",
                sizes: "96x96",
                type: "image/png",
            },
            {
                src: "images/icons/icon-128x128.png",
                sizes: "128x128",
                type: "image/png",
            },
            {
                src: "images/icons/icon-144x144.png",
                sizes: "144x144",
                type: "image/png",
            },
            {
                src: "images/icons/icon-152x152.png",
                sizes: "152x152",
                type: "image/png",
            },
            {
                src: "images/icons/icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "images/icons/icon-384x384.png",
                sizes: "384x384",
                type: "image/png",
            },
            {
                src: "images/icons/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
        theme_color: "#1b2531",
        background_color: "#1b2531",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "portrait",
    },
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), VitePWA(manifestForPlugIn)],
    resolve: {
        alias: { "@": path.resolve(__dirname, "./src") },
    },
});
