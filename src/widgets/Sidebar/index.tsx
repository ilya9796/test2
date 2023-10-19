import { SidebarNavigation, SidebarSearch, Sidebarhelp } from "./ui";

import { SidebarIcon } from "shared/ui/Icons";

import cn from "classnames";

interface IProps {
	className?: string;
}

export function Sidebar({ className }: IProps) {
	return (
		<article
			className={cn(
				"flex flex-col pt-20 md:pt-4 pb-3 px-5 h-screen ",
				"bg-black",
				className
			)}
		>
			<SidebarIcon className="absolute top-[330px] left-0" />
			<SidebarSearch />
			<SidebarNavigation />
			<Sidebarhelp />
		</article>
	);
}
