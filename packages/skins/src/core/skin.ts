import { Theme } from "../types";

export interface SkinOptions {
	/**
	 * SVG icon for the system.
	 * @default
	 */
	systemIcon: string;

	/**
	 * Replacements for app icons based on app id.
	 */
	appIcons?: { [key: string]: string };

	/**
	 * Replacements for app names based on app id.
	 */
	appNames?: { [key: string]: string };

	/**
	 * Array of URLs of wallpaper images.
	 */
	wallpapers: string[];

	/**
	 * URL of default wallpaper image.
	 * @default
	 */
	defaultWallpaper: string;

	/**
	 * URLs of icons for types of files.
	 */
	fileIcons: {
		generic: string;
		info?: string;
		text?: string;
		code?: string;
		external?: string;
		video?: string;
		audio?: string;
	};

	/**
	 * URLs of icons for types of folders.
	 */
	folderIcons: {
		generic: string;
		images?: string;
		text?: string;
		link?: string;
		video?: string;
		audio?: string;
	};

	/**
	 * Function that dynamically imports style sheet.
	 */
	loadStyleSheet?: () => void;

	/**
	 * Default theme.
	 */
	defaultTheme?: Theme;
}

export class Skin {
	systemIcon: SkinOptions["systemIcon"];
	appIcons: SkinOptions["appIcons"];
	appNames: SkinOptions["appNames"];
	wallpapers: SkinOptions["wallpapers"];
	defaultWallpaper: SkinOptions["defaultWallpaper"];
	fileIcons: SkinOptions["fileIcons"];
	folderIcons: SkinOptions["folderIcons"];
	loadStyleSheet: SkinOptions["loadStyleSheet"];
	defaultTheme: SkinOptions["defaultTheme"];

	constructor(options: Partial<SkinOptions> = {}) {
		this.systemIcon = options.systemIcon ?? "";

		this.appIcons = options.appIcons;
		this.appNames = options.appNames;

		this.wallpapers = options.wallpapers ?? [
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
		];
		this.defaultWallpaper = options.defaultWallpaper ?? "";

		this.fileIcons = options.fileIcons ?? {
			generic: "",
			text: "",
			info: "",
			code: "",
			external: "",
			video: "",
			audio: "",
		};
		this.folderIcons = options.folderIcons ?? {
			generic: "",
			images: "",
			text: "",
			link: "",
			video: "",
			audio: "",
		};

		this.loadStyleSheet = options.loadStyleSheet;

		this.defaultTheme = options.defaultTheme;
	}
}