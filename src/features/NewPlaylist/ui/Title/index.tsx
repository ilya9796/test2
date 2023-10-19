import { ArrIcon } from "shared/ui/Icons";

export function Title() {
	return (
		<div className="flex justify-between items-center relative z-[3] text-white">
			<h3 className="text-[24px] font-bold">New Playlist</h3>
			<span className="flex items-center gap-1 text-sm">
				See All <ArrIcon className="rotate-[180deg]" />
			</span>
		</div>
	);
}
