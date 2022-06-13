import { HttpEvent, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, of, take } from 'rxjs';
import { ICollection } from '../typings/collection';
import { IFiltersParams } from '../typings/filters';
import { IItem } from '../typings/item';
import { IUser, IUserLocalStorage, IUserLogin, IUserRegister, User } from '../typings/user';
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

  public getItemsByIds(ids: number[]): Observable<IItem[]> {
    return this.data.sendRequest<IItem[]>({
      method: 'GET',
      url: `${this.basePath}/items`,
      params: new HttpParams({
        fromString: ids.map(id => `id=${id}`).join('&'),
      })
    })
    .pipe(
      take(1),
      map(res => (res.body && res.body) || [] as IItem[])
    )
  }

  public getCollectionItems(id: number, params?: IFiltersParams): Observable<IItem[]> {
    return this.data.sendRequest<IItem[]>({
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
        return data.body || []
      })
    )
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

  public loginUser(user: IUserLogin): Observable<User | null> {
    const {username, password} = user
    return this.data.sendRequest<IUserRegister[]>({
      method: 'GET',
      url: `${this.basePath}/users`,
      params: new HttpParams({
        fromObject: {
          username,
          password,
        }
      }),
    })
    .pipe(
      take(1),
      map(res => {
        let result: User | null = null;
        if (res.body && Array.isArray(res.body) && res.body.length > 0) {
          const {id, username, name, items, onSale, sold} = res.body[0]
          result = new User(
            id, username, name, items, onSale, sold
          )
        } else {
          result = null
        }
        this.dataStore.user = result
        this.saveUserToLocalStorage(result)
        return result
      })
    )
  }

  public registerUser(user: IUserRegister): Observable<User | null> {
    if (!user.username || !user.password || !user.passwordRepeat) {
      return of(null)
    }
    return this.data.sendRequest<IUser>({
      method: 'POST',
      url: `${this.basePath}/users`,
      body: user
    })
    .pipe(
      take(1),
      map(res => {
        const user = res.body
        if (user) {
          const { id, username, name, items, onSale, sold } = user
          const safeUser: IUser = {
            id,
            username,
            name, 
            items,
            onSale,
            sold,
          }
          this.dataStore.user = safeUser
          this.saveUserToLocalStorage(safeUser)
          return safeUser
        }
        this.dataStore.user = user
        this.saveUserToLocalStorage(user)
        return user
      })
    )
  }

  public logoutUser(): void {
    this.removeUserFromLocalStorage()
    this.dataStore.user = null
  }

  public getStoredUser(): void {
    const userStore = this.getUserFromLocalStorage()
    if (!userStore) {
      this.dataStore.user = null
    }
    this.dataStore.user = userStore
  }

  private saveUserToLocalStorage(user: User | null) {
    if (!user) return
    localStorage.setItem('user', JSON.stringify(user))
  }

  private getUserFromLocalStorage(): User | null {
    const userStr = localStorage.getItem('user')
    if (!userStr) return null
    return JSON.parse(userStr) as User;
  }

  private removeUserFromLocalStorage() {
    localStorage.removeItem('user')
  }
}
