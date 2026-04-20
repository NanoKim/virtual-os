import { App } from "@virtual-os/core";
import { AppCenter } from "./components/AppCenter";

const appCenter = new App("AppCenter", "app-center", AppCenter)
	.setIconUrl("")
	.setPinnedByDefault(true)
	.setCategory("Utilities & tools");

export { appCenter };