import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { verticalSwiperConfig } from 'src/app/configurations/vertical-swiper.config';
import SwiperCore, { Autoplay, EffectCube, EffectFade, EffectFlip, Navigation, SwiperOptions } from 'swiper';
import { EventsParams, SwiperComponent } from 'swiper/angular';

SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-vertical-swiper',
  templateUrl: './vertical-swiper.component.html',
  styleUrls: ['./vertical-swiper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalSwiperComponent implements OnInit {
  public config!: SwiperOptions

  constructor() { }

  ngOnInit(): void {
    this.config = {
      ...verticalSwiperConfig,
      navigation: {
        prevEl: '.prev-btn',
        nextEl: '.next-btn',
      },
    };
  }

}
