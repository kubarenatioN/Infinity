import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, concat, concatAll, filter, forkJoin, map, merge, mergeMap, Observable, of, skip, skipUntil, switchMap, take, withLatestFrom } from 'rxjs';
import { otherProductsSwiperConfig } from 'src/app/configurations/other-products-swiper.config';
import { DataManagementService } from 'src/app/services/data-management.service';
import { DataStoreService } from 'src/app/services/data-store.service';
import { IAttributesMapping } from 'src/app/typings/attributes';
import { ICollectionAttribute } from 'src/app/typings/collection-attribute';
import { IItem } from 'src/app/typings/item';
import { IItemAttributes } from 'src/app/typings/item-attribute';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  public config$ = of({
    ...otherProductsSwiperConfig,
  });
  public product$!: Observable<IItem>
  public attributesMap$!: Observable<string[][]>
  public otherProducts$!: Observable<IItem[]>

  constructor(
    private dataManagement: DataManagementService,
    private dataStore: DataStoreService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.product$ = this.activatedRoute.queryParams
      .pipe(
        switchMap(params => {
          const id = Number.parseInt(params['id'] || '')
          return this.dataManagement.getItem(id)
        }),
        map(p => {
          const keys = Object.keys(p?.attributes)
          this.attributesMap$ = of(keys.map(k => [k, p.attributes[k]]))
          return p
        })
      )

    this.otherProducts$ = this.product$.pipe(
      switchMap(p => {
        return this.dataManagement.getCollectionItems(p.collectionId)
      }),
      withLatestFrom(this.product$),
      map(([items, p]) => {
        return items.filter(it => it.id !== p.id)
      })
    )
  }
}
