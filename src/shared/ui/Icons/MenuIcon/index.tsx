import { IIconProps } from "../types";

export function MenuIcon({ className, onClick }: IIconProps) {
	return (
		<svg
			width="20"
			height="8"
			viewBox="0 0 20 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			onClick={onClick}
		>
			<path d="M0 1H20" stroke="#202326" strokeWidth="2" />
			<path d="M0 7H20" stroke="#202326" strokeWidth="2" />
		</svg>
	);
}
