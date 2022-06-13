import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CollectionsComponent } from './components/collections/collections.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ExploreComponent,
    CatalogComponent,
    CollectionsComponent,
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ExploreRoutingModule,
    SharedModule,
  ]
})
export class ExploreModule { }
