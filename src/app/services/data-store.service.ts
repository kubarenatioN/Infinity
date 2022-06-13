import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICollection } from '../typings/collection';
import { IItem } from '../typings/item';
import { IUser, User } from '../typings/user';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  private exploreItemsStore$ = new BehaviorSubject<IItem[]>([])
  private collectionsStore$ = new BehaviorSubject<ICollection[]>([])
  private userStore$ = new BehaviorSubject<User | null>(null)

  public exploreItems$ = this.exploreItemsStore$.asObservable()
  public collections$ = this.collectionsStore$.asObservable()
  public user$ = this.userStore$.asObservable()

  public set exploreItems(items: IItem[]) {
    this.exploreItemsStore$.next(items)
  }

  public set collections(items: ICollection[]) {
    this.collectionsStore$.next(items)
  }

  public set user(user: User | null) {
    this.userStore$.next(user)
  }
}
