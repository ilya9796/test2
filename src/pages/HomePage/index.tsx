import NewPlaylist from "features/NewPlaylist";
import { Tranding } from "features/Tranding";

import { BackTitle, MainFilter } from "entities/ui";

export function HomePage() {
	return (
		<div className="bg-black min-h-screen relative z-[3] py-5 px-5 sm:px-10 2xl:pr-[86px] 2xl:pl-[104px]">
			<div className="fixed top-0 left-0 h-[440px] z-[1] w-full bg-[#7C2B1E]"></div>
			<div className="mainLinear fixed h-[204px] z-[2] w-full top-[236px] left-0"></div>
			<div className="flex flex-col lg:flex-row justify-between items-center relative z-[3]">
				<BackTitle />
				<MainFilter />
			</div>
			<NewPlaylist />
			<Tranding className="mt-[46px] relative z-[3]" />
		</div>
	);
}
