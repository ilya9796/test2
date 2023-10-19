import { useLocation } from "react-router-dom";

import { HelpIcon } from "shared/ui/Icons";

import cn from "classnames";

export function Sidebarhelp() {
	const location = useLocation();

	const isHome = location.pathname === "/";

	return (
		<>
			<div
				className={cn(
					"flex items-center gap-[13px]",
					"mt-auto py-3 hover:text-[#EF7B3C] duration-500",
					"text-[14px] text-white group",
					isHome ? "mb-10" : "mb-[29px]"
				)}
			>
				<HelpIcon className="text-[rgba(256,256,256,0.5)] group-hover:text-[#EF7B3C] duration-500" />{" "}
				Help
			</div>
			{!isHome && (
				<div
					className={cn(
						"flex justify-between items-center",
						"text-[rgba(255,255,255,0.50)] text-[10px] font-bold"
					)}
				>
					<span>Privacy & Policy</span>
					<span>Terms & Conditions</span>
				</div>
			)}
		</>
	);
}
