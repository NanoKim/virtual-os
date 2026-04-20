import { AppsConfig, appCenter } from "virtual-os";
import { NAME } from "./branding.config";

export const appsConfig = new AppsConfig({
	apps: [
		appCenter.setName("Apps")
			.setDescription(`Browse and install ${NAME} apps.`)
			.setPinnedByDefault(false),
	],
});