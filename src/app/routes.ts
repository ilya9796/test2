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
		path: "/test2",
		link: () => `/test2`,
		icon: HomeIcon,
	},
	watch: {
		title: "Watch",
		path: "/test2/watch/:id",
		link: (id: number) => `/test2/watch/${id}`,
		icon: WatchIcon,
	},
	community: {
		title: "Community",
		path: "/test2/community",
		link: () => "/test2/community",
		icon: CommunityIcon,
	},
};
