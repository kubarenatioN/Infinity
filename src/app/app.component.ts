import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { EMPTY, filter, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isMainPage = false;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => {
          return e instanceof NavigationEnd
        }),
        map(() => this.activatedRoute.firstChild),
        switchMap(firstChild => firstChild?.data ? firstChild?.data : EMPTY),
        tap(data => {
          this.isMainPage = !!data['id']
        }),
      )
      .subscribe()
  }
}
