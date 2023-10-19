import { Link } from "react-router-dom";

import { RoutesType, routes } from "app/routes";

import { images } from "shared/images";

import cn from "classnames";

export function SidebarNavigation() {
	const watch = 2;
	return (
		<div className="flex flex-col mt-[30px]">
			<span className="text-[rgba(255,255,255,0.50)] text-[12px]">Main</span>
			<div className="flex flex-col gap-[10px] text-white mt-[14px]">
				{Object.keys(routes).map((key) => {
					const route = routes[key as RoutesType];
					return (
						<div className="flex justify-between items-center">
							<Link
								to={
									route.title === "Watch"
										? "/test2/watch/doesn'tSet"
										: route.link()
								}
								key={route.title}
								className="flex items-center gap-[13px] py-3 hover:text-[#EF7B3C] duration-500 group"
							>
								<route.icon className="text-[rgba(256,256,256,0.5)] group-hover:text-[#EF7B3C] duration-500" />
								{route.title}
							</Link>
							{route.title === "Community" && (
								<div className="flex items-center">
									<img
										className="translate-x-6 relative z-[1]"
										src={images.profile_1}
									/>
									<img
										className="translate-x-3 relative z-[2]"
										src={images.profile_2}
									/>
									<img className="relative z-[3]" src={images.profile_3} />
								</div>
							)}
							{route.title === "Watch" && watch > 0 && (
								<div
									className={cn(
										"flex items-center justify-center",
										"w-6 h-6 bg-[#EF7B3C] rounded-[7px]"
									)}
								>
									{watch}
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
