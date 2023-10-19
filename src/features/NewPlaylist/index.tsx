import { Title } from "./ui";

import { IUserData, newPlaylist } from "shared/mook/usersData";

import { UserCard } from "entities/ui/UserCard";

function NewPlaylist() {
	return (
		<section className="relative z-10 mt-4 lg:mt-[51px]">
			<Title />
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:flex gap-3 mt-5">
				{newPlaylist.map((card: IUserData) => (
					<UserCard card={card} />
				))}
			</div>
		</section>
	);
}

export default NewPlaylist;
