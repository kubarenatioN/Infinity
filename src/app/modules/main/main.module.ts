import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FirstScreenComponent } from './components/first-screen/first-screen.component';
import { AuctionsComponent } from './components/auctions/auctions.component';
import { TopCollectionsComponent } from './components/top-collections/top-collections.component';


@NgModule({
  declarations: [
    MainComponent,
    FirstScreenComponent,
    AuctionsComponent,
    TopCollectionsComponent,
  ],
  imports: [
    SharedModule,
    MainRoutingModule
  ]
})
export class MainModule { }
