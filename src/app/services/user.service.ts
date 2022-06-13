import { EventEmitter, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { IItem } from '../typings/item';
import { IUser, IUserLogin, User } from '../typings/user';
import { DataManagementService } from './data-management.service';
import { DataStoreService } from './data-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user$ = this.dataStore.user$
  public navigationEndEvent = new EventEmitter<boolean>()

  constructor(
    private dataManagement: DataManagementService,
    private dataStore: DataStoreService,
    private router: Router,
  ) {
    router.events.pipe(
      filter((e): e is NavigationEnd => {
        return e instanceof NavigationEnd
      })
    )
    .subscribe(e => {
      console.log('nav');
      this.navigationEndEvent.emit(false)
    })
  }

  public logout() {
    this.dataManagement.logoutUser()
    if (this.router.routerState.snapshot.url.includes('profile')) {
      this.router.navigate(['main'])
    }
  }

  public getUserItems(ids: number[]) {
    return this.dataManagement.getItemsByIds(ids)
  }
}
