import { ICollectionAttribute } from "./collection-attribute";

export interface ICollection {
	id: number,
	name: string,
	image: string,
	attributes: ICollectionAttribute[],
}