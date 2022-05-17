import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CollectionsComponent } from './components/collections/collections.component';

@NgModule({
  declarations: [
    ExploreComponent,
    CatalogComponent,
    CollectionsComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCheckboxModule,
    FormsModule,
    ExploreRoutingModule
  ]
})
export class ExploreModule { }
