import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { SwiperModule } from 'swiper/angular';
import { ProductsSwiperComponent } from 'src/app/components/products-swiper/products-swiper.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NftCardComponent } from 'src/app/components/nft-card/nft-card.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductsSwiperComponent,
    FooterComponent,
    NftCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    MatButtonModule,
  ],
  exports: [
    CommonModule,
    SwiperModule,
    HeaderComponent,
    ProductsSwiperComponent,
    FooterComponent,
    NftCardComponent,
  ]
})
export class SharedModule { }
