import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICollection } from '../typings/collection';
import { IItem } from '../typings/item';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  private exploreItemsStore$ = new BehaviorSubject<IItem[]>([])
  private collectionsStore$ = new BehaviorSubject<ICollection[]>([])

  public exploreItems$ = this.exploreItemsStore$.asObservable()
  public collections$ = this.collectionsStore$.asObservable()

  public set exploreItems(items: IItem[]) {
    this.exploreItemsStore$.next(items)
  }

  public set collections(items: ICollection[]) {
    this.collectionsStore$.next(items)
  }
}
