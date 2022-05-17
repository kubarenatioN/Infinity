import { ICollection } from "../typings/collection";

export const collectionMock: ICollection = {
	id: 1,
	name: 'Bored Ape Yacht Club',
	image: 'img1.png',
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