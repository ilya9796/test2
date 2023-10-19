import { Link } from "react-router-dom";

import { routes } from "app/routes";

import { IUserData } from "shared/mook/usersData";
import { GraduateIcon, MoneyIcon } from "shared/ui/Icons";

import cn from "classnames";

interface IProps {
	className?: string;
	card: IUserData;
}

export function UserCard({ className, card }: IProps) {
	return (
		<Link
			to={routes.watch.link(card.id)}
			className={cn(
				"relative rounded-[20px] overflow-hidden text-white",
				"flex flex-col p-4 gap-[260px] sm:gap-[239px]",
				className
			)}
			key={card.id}
		>
			<img
				className="absolute top-0 left-0 w-full h-full duration-500 hover:scale-[1.1]"
				src={card.img}
				alt="user card"
			/>
			<div className="flex items-center justify-between">
				<div
					className={cn(
						"flex items-center gap-[6.5px] py-[2.5px] pl-[6px] pr-[8px]",
						"bg-[#EF7B3C] rounded-[15px] backdrop-blur-[13px]"
					)}
				>
					<MoneyIcon />
					Earn 2T
				</div>
				<div
					className={cn(
						"flex justify-center items-center bg-[rgba(0,0,0,0.10)]",
						"h-[30px] w-[30px] rounded-full backdrop-blur-[5px]"
					)}
				>
					<GraduateIcon />
				</div>
			</div>
			<p className="mt-auto relative z-[1] text-lg">{card.description}</p>
		</Link>
	);
}
