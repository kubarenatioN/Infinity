import { IAttributesMapping } from "./attributes"
import { ICollectionAttribute } from "./collection-attribute"
import { IFiltersMapping } from "./filters"

export class FiltersModel {
	public minPrice?: number
	public maxPrice?: number
	public test1 = false
	public attributesMapping: IAttributesMapping = {} 

	constructor(public attributes: ICollectionAttribute[]) {
		this.attributesMapping = this.createAttributesMapping(attributes)
	}

	public createFiltersMapping(): IFiltersMapping {
		const mapping: IFiltersMapping = {} as IFiltersMapping

		mapping.maxPrice = this.maxPrice
		mapping.minPrice = this.minPrice
		mapping.attributes = this.attributesMapping
		
		return mapping
	}

	private createAttributesMapping(attributes: ICollectionAttribute[]) {
		const mapping: IAttributesMapping = {}
		attributes.forEach(a => {
			mapping[a.name] = Object.fromEntries(a.options.map(opt => [opt, false]))
		})
		return mapping
	}
}