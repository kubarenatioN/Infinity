import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, switchMap, take } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { IItem } from 'src/app/typings/item';
import { IUser } from 'src/app/typings/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  public user$!: Observable<IUser | null>
  public userItems$!: Observable<IItem[]>
  public userSold$!: Observable<IItem[]>
  public userOnSale$!: Observable<IItem[]>

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user$ = this.userService.user$
      .pipe(
        take(1),
        map(user => {
          if (!user) {
            this.router.navigate(['profile/auth'])
            return null
          }
          return user
        })
      )

    this.userItems$ = this.user$.pipe(
      take(1),
      switchMap(user => {
        return user && user.items && user.items.length > 0
          ? this.userService.getUserItems(user.items)
          : []
      })
    )
    this.userSold$ = this.user$.pipe(
      take(1),
      switchMap(user => {
        return user && user.sold && user.sold.length > 0
          ? this.userService.getUserItems(user.sold)
          : []
      })
    )
    this.userOnSale$ = this.user$.pipe(
      take(1),
      switchMap(user => {
        return user && user.onSale && user.onSale.length > 0
          ? this.userService.getUserItems(user.onSale)
          : []
      })
    )
  }

  public logout() {
    this.userService.logout()
  }
}
