import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { SwiperModule } from 'swiper/angular';
import { ProductsSwiperComponent } from 'src/app/components/products-swiper/products-swiper.component';
import { FooterComponent } from '../../components/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ProductsSwiperComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
  ],
  exports: [
    CommonModule,
    SwiperModule,
    HeaderComponent,
    ProductsSwiperComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
