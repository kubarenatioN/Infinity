import { Injectable } from '@angular/core';
import { DataManagementService } from './data-management.service';
import { DataStoreService } from './data-store.service';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {
  public items$ = this.dataStore.collections$

  constructor(
    private dataManagement: DataManagementService,
    private dataStore: DataStoreService,
  ) { }

  public getCollections(): void {
    this.dataManagement.getAllCollections()
  }
}
