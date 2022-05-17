import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Injectable } from '@angular/core';
import { max, Observable } from 'rxjs';
import { IFiltersMapping, IFiltersParams } from '../typings/filters';
import { DataManagementService } from './data-management.service';
import { DataStoreService } from './data-store.service';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {
  public items$ = this.dataStore.exploreItems$
  private limit = 8

  constructor(
    private dataManagement: DataManagementService,
    private dataStore: DataStoreService,
  ) { }

  public getItemsByFilters(id: number, filters: IFiltersMapping, offset = 0) {
    console.log(filters);
    const params = this.createFiltersParams(filters)
    this.dataManagement.getCollectionItems(id, params)
  }

  public getCollection(id: number) {
    return this.dataManagement.getCollection(id)
  }

  private createFiltersParams(filters: IFiltersMapping): IFiltersParams {
    const params = {} as IFiltersParams
    const { minPrice, maxPrice } = filters
    if (minPrice) {
      params['minPrice'] = minPrice 
    }
    if (maxPrice) {
      params['maxPrice'] = maxPrice
    }

    Object.entries(filters.attributes).forEach(a => {
      const name = a[0]
      const options = a[1]
      const values = Object.keys(options)
      let attrQuery = values.filter(k => options[k]).join('|')
      if (attrQuery) {
        params[`attributes.${name}_like`] = attrQuery
      }
    })

    // console.log('attributes', params);

    return params
  }
  
}
