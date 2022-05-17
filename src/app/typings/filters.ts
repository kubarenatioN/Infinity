import { IAttributesMapping } from "./attributes";

export interface IFiltersMapping {
	minPrice?: number,
	maxPrice?: number,
	attributes: IAttributesMapping,
}

export interface IFiltersParams {
	[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>
}