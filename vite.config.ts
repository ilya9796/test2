import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";
const baseURL = fileURLToPath(new URL("./src", import.meta.url));
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	resolve: {
		alias: [
			{
				find: "@assets",
				replacement: `${baseURL}/assets`,
			},
			{
				find: "@icons",
				replacement: `${baseURL}/components/Icons`,
			},
		],
	},
	base: "/test2/",
});
