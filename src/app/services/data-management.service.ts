import { HttpEvent, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, take } from 'rxjs';
import { ICollection } from '../typings/collection';
import { IFiltersParams } from '../typings/filters';
import { IItem } from '../typings/item';
import { DataStoreService } from './data-store.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {

  private basePath = 'http://localhost:3002'

  constructor(
    private data: DataService,
    private dataStore: DataStoreService,
  ) { }

  public getAllItems() {
    return this.data.sendRequest<IItem>({
      method: 'GET',
      url: `${this.basePath}/items`,
    }).pipe(
      map(data => {
        console.log(data.body);
        return data
      })
    )
  }

  public getItem(id: number): Observable<IItem> {
    return this.data.sendRequest<IItem[]>({
      method: 'GET',
      url: `${this.basePath}/items`,
      params: new HttpParams({
        fromObject: {
          id,
        }
      })
    })
    .pipe(
      take(1),
      map(res => (res.body && res.body[0]) || {} as IItem)
    )
  }

  public getCollectionItems(id: number, params?: IFiltersParams): void {
    this.data.sendRequest<IItem[]>({
      method: 'GET',
      url: `${this.basePath}/items`,
      params: new HttpParams({
        fromObject: {
          ...params,
          collectionId: id,
        }
      }),
    })
    .pipe(
      take(1),
      map(data => {
        this.dataStore.exploreItems = data.body || []
      })
    )
    .subscribe()
  }

  public getCollection(id: number): Observable<ICollection> {
    return this.data.sendRequest<ICollection[]>({
      method: 'GET',
      url: `${this.basePath}/collections`,
      params: new HttpParams({
        fromObject: {
          id,
        }
      }),
    })
    .pipe(
      take(1),
      map(data => {
        const collection = data.body && data.body[0]
        return collection || {} as ICollection
      })
    )
  }

  public getAllCollections(): void {
    this.data.sendRequest<ICollection[]>({
      method: 'GET',
      url: `${this.basePath}/collections`,
    })
    .pipe(
      take(1),
      map(res => {
        this.dataStore.collections = res.body || []
      })
    )
    .subscribe()
  }
}
