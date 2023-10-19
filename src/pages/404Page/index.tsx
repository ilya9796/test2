import { Link } from "react-router-dom";

import cn from "classnames";

export function Page404() {
	return (
		<div
			className={cn(
				"h-screen w-full bg-black text-[#EF7B3C]",
				"flex flex-col justify-center items-center text-[40px]"
			)}
		>
			Page doesn't exist
			<Link className="text-xl underline" to={"/"}>
				Back to main!
			</Link>
		</div>
	);
}
