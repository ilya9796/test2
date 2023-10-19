import { useLocation } from "react-router-dom";
import { IIconProps } from "../types";

export function SidebarIcon({ className, onClick }: IIconProps) {
	const location = useLocation();

	const isHome = location.pathname === "/test2/";
	if (isHome) {
		return (
			<svg
				width="12"
				height="58"
				viewBox="0 0 12 58"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
				onClick={onClick}
			>
				<g filter="url(#filter0_f_887_283)">
					<path
						d="M1 7C3.20914 7 5 8.79086 5 11L5 47C5 49.2091 3.20914 51 0.999999 51L1 7Z"
						fill="#4DEB32"
					/>
				</g>
				<path
					d="M0 7C2.20914 7 4 8.79086 4 11V47C4 49.2091 2.20914 51 0 51V7Z"
					fill="#6FD964"
				/>
				<defs>
					<filter
						id="filter0_f_887_283"
						x="-6"
						y="0"
						width="18"
						height="58"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="3.5"
							result="effect1_foregroundBlur_887_283"
						/>
					</filter>
				</defs>
			</svg>
		);
	} else {
		return (
			<svg
				width="12"
				height="58"
				viewBox="0 0 12 58"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
				onClick={onClick}
			>
				<g filter="url(#filter0_f_887_722)">
					<path
						d="M1 7C3.20914 7 5 8.79086 5 11L5 47C5 49.2091 3.20914 51 0.999999 51L1 7Z"
						fill="#4DEB32"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_887_722"
						x="-6"
						y="0"
						width="18"
						height="58"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="3.5"
							result="effect1_foregroundBlur_887_722"
						/>
					</filter>
				</defs>
			</svg>
		);
	}
}
