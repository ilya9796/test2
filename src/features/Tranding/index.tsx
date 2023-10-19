import { Title } from "./ui";

import { UserCard } from "entities/ui/UserCard";

import { IUserData, Tranding as traindingMook } from "shared/mook/usersData";

import cn from "classnames";

interface IProps {
	className?: string;
}

export function Tranding({ className }: IProps) {
	return (
		<section className={cn("", className)}>
			<Title />
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:flex gap-3 mt-5">
				{traindingMook.map((card: IUserData) => (
					<UserCard card={card} />
				))}
			</div>
		</section>
	);
}
