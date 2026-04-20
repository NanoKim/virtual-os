import { defineConfig } from "vite";
import { appViteConfig } from "@virtual-os/dev-tools";

export default defineConfig({
	...appViteConfig(__dirname, "src/main.ts"),
});