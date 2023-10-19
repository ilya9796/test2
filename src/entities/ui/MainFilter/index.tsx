import { useState } from "react";

import { FilterType } from "../types";

import cn from "classnames";

interface IProps {
	className?: string;
}

export function MainFilter({ className }: IProps) {
	const [active, setActive] = useState<FilterType>("All");

	return (
		<div className={cn("flex", className)}>
			{FilterType.map((btn) => (
				<button
					className={cn(
						"p-3 text-white duration-500",
						active === btn &&
							"bg-[rgba(255,255,255,0.10)] rounded-full backdrop-blur-[4]"
					)}
					onClick={() => setActive(btn)}
					key={btn}
				>
					{btn}
				</button>
			))}
		</div>
	);
}
