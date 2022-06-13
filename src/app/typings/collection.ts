import { ICollectionAttribute } from "./collection-attribute";

export interface ICollection {
	id: number,
	name: string,
	descr?: string,
	image: string,
	avatar: string,
	floor: number,
	change: number,
	attributes: ICollectionAttribute[],
}