import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { productsSwiperConfig } from 'src/app/configurations/product-swiper.config';
import { productsSwiperMock } from 'src/app/mocks/products-swiper.mock';
import SwiperCore, { Autoplay, SwiperOptions } from 'swiper';
import { AutoplayOptions } from 'swiper/types';

SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-products-swiper',
  templateUrl: './products-swiper.component.html',
  styleUrls: ['./products-swiper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsSwiperComponent implements OnInit {
  public slides: any = productsSwiperMock
  public config!: SwiperOptions
  public config2!: SwiperOptions
  constructor() { }

  ngOnInit(): void {
    this.config = productsSwiperConfig
    this.config2 = {
      ...productsSwiperConfig,
      slidesPerView: 5,
      autoplay: {
        ...(productsSwiperConfig.autoplay as AutoplayOptions),
        reverseDirection: true,
      }
    }
  }

}
