import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

// https://www.pwabuilder.com/imageGenerator
// https://favicon.inbrowser.app/tools/favicon-generator
// Bu site lar orqali favicon va pwa manifest image lar yaratildi

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
        icons: require("./public/icons.json"),
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
