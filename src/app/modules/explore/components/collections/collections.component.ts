import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CollectionsService } from 'src/app/services/collections.service';
import { ICollection } from 'src/app/typings/collection';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionsComponent implements OnInit {
  public collections$: Observable<ICollection[]> = this.collectionsService.items$

  constructor(
    private collectionsService: CollectionsService,
  ) { }

  ngOnInit(): void {
    this.collectionsService.getCollections()
  }

}
