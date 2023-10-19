import { CommunityIcon, HomeIcon, WatchIcon } from "shared/ui/Icons";
// import { HomeIcon, WatchIcon } from "../shared/ui/Icons";

export type RoutesType = "home" | "watch" | "community";

export interface IRoute {
	title: string;
	path: string;
	icon?: any;
	link: (...args: any[]) => string;
	children?: Record<string, IRoute>;
	disabled?: boolean;
}
export const routes: Record<RoutesType, IRoute> = {
	home: {
		title: "Home",
		path: "/",
		link: () => `/`,
		icon: HomeIcon,
	},
	watch: {
		title: "Watch",
		path: "/watch/:id",
		link: (id: number) => `/watch/${id}`,
		icon: WatchIcon,
	},
	community: {
		title: "Community",
		path: "/community",
		link: () => "/community",
		icon: CommunityIcon,
	},
};
