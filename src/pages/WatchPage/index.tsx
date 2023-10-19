import { useNavigate } from "react-router-dom";

import { Slider } from "features/Slider";

import { BackTitle } from "entities/ui";

import cn from "classnames";

export function WatchPage() {
	const navigate = useNavigate();

	return (
		<div className="watchLinear min-h-screen px-7 sm:px-0 pt-20 sm:pt-5 max-h-screen overflow-hidden">
			<div
				className={cn(
					"flex justify-between items-center relative z-[3]",
					"sm:ml-[85px] sm:pr-[104px]"
				)}
			>
				<BackTitle onClick={() => navigate(-1)} />
				<div className="py-3 px-4 bg-white rounded-[21px] text-[17px] font-bold">
					Skip
				</div>
			</div>
			<div className="mt-10 sm:mt-0">
				<Slider />
			</div>
		</div>
	);
}
