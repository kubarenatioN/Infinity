import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, EMPTY, filter, map, Observable, Subject, switchMap, takeUntil, tap, withLatestFrom } from 'rxjs';
import { collectionMock } from 'src/app/mocks/collection.config';
import { DataManagementService } from 'src/app/services/data-management.service';
import { ExploreService } from 'src/app/services/explore.service';
import { ICollection } from 'src/app/typings/collection';
import { ICollectionAttribute } from 'src/app/typings/collection-attribute';
import { FiltersModel } from 'src/app/typings/filters-model';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExploreComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('filtersForm') fitlersForm!: NgForm;

  public collection$!: Observable<ICollection>
  public items$ = this.exploreService.items$
  public model!: FiltersModel
  
  private collection!: ICollection
  private lifecycle: Subject<null> = new Subject();

  constructor(
    private exploreService: ExploreService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = this.formatCollectionId(this.activatedRoute.snapshot.queryParamMap.get('id'))
    if (!id) {
      this.router.navigate(['/explore'])
    } else {
      this.collection$ = this.exploreService.getCollection(id)
        .pipe(
          map(collection => {
            this.collection = collection
            this.model = new FiltersModel(collection.attributes)
            return collection
          })
        )
    }
  }

  ngAfterViewInit(): void {
    this.fitlersForm.form.valueChanges
      .pipe(
        debounceTime(500),
      )
      .subscribe(() => {
        const filters = this.model.createFiltersMapping()
        this.exploreService.getItemsByFilters(this.collection.id, filters)
      })
  }

  ngOnDestroy(): void {
    this.lifecycle.next(null)
    this.lifecycle.complete()
  }

  private formatCollectionId(id: string | null) {
    if (!id || Number.isNaN(Number.parseInt(id))) {
      return null
    }
    return Number.parseInt(id)
  }
}
