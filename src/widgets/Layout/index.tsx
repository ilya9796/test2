import { useState } from "react";

import { Outlet } from "react-router-dom";

import { Sidebar } from "widgets/Sidebar";

import { useMediaQuery } from "shared/hooks";
import { MenuIcon } from "shared/ui/Icons";

import cn from "classnames";

export function Layout() {
	const isMobile = useMediaQuery("(max-width: 768px)");
	const [menu, setMenu] = useState(false);
	return (
		<>
			{isMobile && (
				<div
					className={cn(
						"flex justify-center items-center",
						"fixed top-5 right-5 z-20 w-8 h-8 bg-white rounded-full"
					)}
					onClick={() => setMenu((prev) => !prev)}
				>
					<MenuIcon className={cn("duration-500", menu && "rotate-[180deg]")} />
				</div>
			)}
			<main className="md:pl-[290px]">
				<Sidebar
					className={cn(
						"fixed w-[290px] z-[4] duration-500",
						isMobile
							? menu
								? "top-0 right-0"
								: "top-[-1000px] right-0"
							: "top-0 left-0"
					)}
				/>
				<Outlet />
			</main>
		</>
	);
}
