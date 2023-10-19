import { ArrIcon } from "shared/ui/Icons";

import cn from "classnames";

interface IProps {
	className?: string;
	onClick?: () => void;
}

export function BackTitle({ className, onClick }: IProps) {
	return (
		<div
			onClick={onClick}
			className={cn(
				"flex items-center gap-[14px] cursor-pointer",
				"text-[32px] font-bold text-white",
				className
			)}
		>
			<ArrIcon />
			<h2>Academy</h2>
		</div>
	);
}
