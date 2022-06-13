import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { collectionsMock } from 'src/app/mocks/collections.mock';
import { DataManagementService } from 'src/app/services/data-management.service';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-top-collections',
  templateUrl: './top-collections.component.html',
  styleUrls: ['./top-collections.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopCollectionsComponent implements OnInit {
  public items = this.dataStore.collections$
  
  constructor(
    private dataManagement: DataManagementService,
    private dataStore: DataStoreService,
  ) { }

  ngOnInit(): void {
    this.dataManagement.getAllCollections()
  }

}
