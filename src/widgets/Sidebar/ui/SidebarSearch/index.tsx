import { images } from "shared/images";
import { NotificationIcon, SearchIcon } from "shared/ui/Icons";

import cn from "classnames";

export function SidebarSearch() {
	return (
		<div className="flex flex-col gap-[22px]">
			<div className="flex gap-[14px] ml-auto items-center">
				<div
					className={cn(
						"flex justify-center items-center relative",
						"w-[30px] h-[30px] rounded-full bg-[rgba(255,255,255,0.10)]"
					)}
				>
					<NotificationIcon />
					<div
						className={cn(
							"absolute top-0 right-0",
							"w-[9px] h-[9px] rounded-full bg-[#F00]"
						)}
					></div>
				</div>
				<img src={images.profile} alt="" />
			</div>
			<div
				className={cn(
					"flex justify-center items-center gap-[10px] h-[50px]",
					"rounded-[100px] border border-[rgba(255,255,255,0.15)]"
				)}
			>
				<SearchIcon className="ml-auto" />
				<input
					className="w-[50%] bg-transparent pr-4 text-white"
					placeholder="Search"
					type="text"
				/>
			</div>
		</div>
	);
}
