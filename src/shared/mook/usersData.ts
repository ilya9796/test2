import { images } from "shared/images";

export interface IUserData {
	id: number;
	img: string;
	price?: number;
	description: string;
}

export const newPlaylist: IUserData[] = [
	{
		id: 1,
		img: images.person_1,
		price: 0,
		description: "Fundamentals of investment",
	},
	{
		id: 2,
		img: images.person_2,
		price: 0,
		description: "Fundamentals of investment",
	},
	{
		id: 3,
		img: images.person_3,
		price: 0,
		description: "Fundamentals of investment",
	},
	{
		id: 4,
		img: images.person_4,
		price: 0,
		description: "Fundamentals of investment",
	},
];

export const Tranding: IUserData[] = [
	{
		id: 5,
		img: images.person_5,
		price: 0,
		description: "Fundamentals of investment",
	},
	{
		id: 6,
		img: images.person_6,
		price: 0,
		description: "Fundamentals of investment",
	},
	{
		id: 7,
		img: images.person_7,
		price: 0,
		description: "Fundamentals of investment",
	},
	{
		id: 8,
		img: images.person_8,
		price: 0,
		description: "Fundamentals of investment",
	},
];
