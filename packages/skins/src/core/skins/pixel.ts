import { Skin } from "../skin";

export const pixelSkin = new Skin({
	appIcons: {
		"browser": "/assets/skins/pixel/apps/icons/browser.png",
		"calculator": "/assets/skins/pixel/apps/icons/calculator.png",
		"file-explorer": "/assets/skins/pixel/apps/icons/file-explorer.png",
		"media-viewer": "/assets/skins/pixel/apps/icons/media-viewer.png",
		"settings": "/assets/skins/pixel/apps/icons/settings.png",
		"terminal": "/assets/skins/pixel/apps/icons/terminal.png",
		"text-editor": "/assets/skins/pixel/apps/icons/text-editor.png",
	},
	wallpapers: [
		"/assets/skins/pixel/wallpapers/bubble-wallpaper-red.png",
		"/assets/skins/pixel/wallpapers/bubble-wallpaper-orange.png",
		"/assets/skins/pixel/wallpapers/bubble-wallpaper-yellow.png",
		"/assets/skins/pixel/wallpapers/bubble-wallpaper-green.png",
		"/assets/skins/pixel/wallpapers/bubble-wallpaper-skyblue.png",
		"/assets/skins/pixel/wallpapers/bubble-wallpaper-blue.png",
		"/assets/skins/pixel/wallpapers/bubble-wallpaper-indigo.png",
		"/assets/skins/pixel/wallpapers/bubble-wallpaper-purple.png",
		"/assets/skins/pixel/wallpapers/bubble-wallpaper-rainbow.png",
	],
	defaultWallpaper: "/assets/skins/pixel/wallpapers/bubble-wallpaper-red.png",
	fileIcons: {
		generic: "/assets/skins/pixel/apps/file-explorer/file.png",
	},
	folderIcons: {
		generic: "/assets/skins/pixel/apps/file-explorer/folder.png",
	},
	loadStyleSheet: () => {
		void import("../../styles/skins/pixel.css");
	},
});