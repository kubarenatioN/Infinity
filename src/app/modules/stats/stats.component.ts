import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { DataManagementService } from 'src/app/services/data-management.service';
import { DataStoreService } from 'src/app/services/data-store.service';
import { ICollection } from 'src/app/typings/collection';
import { StatsSortColumns } from 'src/app/typings/stats';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsComponent implements OnInit {
  private sort$ = new BehaviorSubject<Sort | null>(null)

  public sortColumns = StatsSortColumns
  public collections$ = combineLatest([
    this.dataStore.collections$,
    this.sort$,
  ]).pipe(
    map(([collections, sort]) => {
      if (!sort) return collections

      const data = collections.slice();

      return data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case this.sortColumns.Name:
            return this.compare(a, b, isAsc, this.sortColumns.Name);
          case this.sortColumns.Floor:
            return this.compare(a, b, isAsc, this.sortColumns.Floor);
          case this.sortColumns.Change:
            return this.compare(a, b, isAsc, this.sortColumns.Change);
          default:
            return 0;
        }
      });
    })
  )

  constructor(
    private dataManagement: DataManagementService,
    private dataStore: DataStoreService,
  ) { }

  ngOnInit(): void {
    this.dataManagement.getAllCollections()
  }

  sortData(sort: Sort) {
    this.sort$.next(sort)
  }
  
  private compare(a: ICollection, b: ICollection, isAsc: boolean, prop: keyof ICollection) {
    return (a[prop]! < b[prop]! ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
