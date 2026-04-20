// import { App, Image } from "@virtual-os/core";
import { App } from "@virtual-os/core";
import styles from "./List.module.css";
import { CategoryType } from "../AppCenter";

interface ListProps {
	apps: App[];
	searchQuery: string;
	category: CategoryType;
}

export function List({ apps, searchQuery, category }: ListProps) {
	return <div className={styles.List}>
		{apps.filter(({ name, id, category: appCategory }) => {
			return (name.toLowerCase().includes(searchQuery) || id.toLowerCase().replaceAll("-", " ").includes(searchQuery))
				&& (category == "All" || appCategory == category);
		}).map(({ name, id, iconUrl }) =>
			<div key={id} className={styles.App}>
				{/* <div className={styles.AppIcon}>{iconUrl && <Image src={iconUrl}/>}</div> */}
				<div className={styles.AppIcon}>{iconUrl}</div>
				<p className={styles.AppName}>{name}</p>
			</div>
		)}
	</div>;
}