import { Component, OnInit, ChangeDetectionStrategy, HostListener, ChangeDetectorRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataStoreService } from 'src/app/services/data-store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public user$ = this.dataStore.user$
  public isMobile = false;
  public isMobileMenuOpen = false;
  public navigationEndEvent = false;

  @HostListener('window:resize', ['$event'])
  onResize(e: Event) {
    this.isMobile = this.checkIsMobile(e.target as Window)
  }
  
  constructor(
    private dataStore: DataStoreService,
    private userService: UserService,
    private ref: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.isMobile = this.checkIsMobile(window)
    this.userService.navigationEndEvent
      .subscribe(val => {
        this.isMobileMenuOpen = val
        this.ref.detectChanges()
      })
  }

  public logout() {
    this.userService.logout()
  }

  private checkIsMobile(window: Window): boolean {
      return window.innerWidth <= 640
  }
}
