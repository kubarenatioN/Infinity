import { IItemAttributes } from "./item-attribute";

export interface IItem {
	id: number,
	name: string,
	price: number,
	img: string,
	collectionId: number,
	attributes: IItemAttributes
}