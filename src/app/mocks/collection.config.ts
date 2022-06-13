import { ICollection } from "../typings/collection";

export const collectionMock: ICollection = {
	id: 1,
	name: 'Bored Ape Yacht Club',
	image: 'img1.png',
	avatar: 'avatar-1.png',
	floor: 123,
	change: 0.0123,
	attributes: [
		{
			name: 'horn',
			options: ['stone', 'tree', 'crystal'],
		},
		{
			name: 'eyes',
			options: ['brown', 'blue', 'green'],
		},
	]
}