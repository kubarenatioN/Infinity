import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { StatsComponent } from './stats.component';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [
    StatsComponent
  ],
  imports: [
    CommonModule,
    MatSortModule,
    StatsRoutingModule
  ]
})
export class StatsModule { }
