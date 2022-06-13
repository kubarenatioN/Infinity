import { Component, OnInit, ChangeDetectionStrategy, Input, AfterViewInit, ViewChild, EventEmitter } from '@angular/core';
import { map, Observable, of, pipe } from 'rxjs';
import { productsSwiperConfig } from 'src/app/configurations/product-swiper.config';
import { productsSwiperMock } from 'src/app/mocks/products-swiper.mock';
import { DataManagementService } from 'src/app/services/data-management.service';
import { IItem } from 'src/app/typings/item';
import SwiperCore, { Autoplay, SwiperOptions, Virtual } from 'swiper';
import { EventsParams, SwiperComponent } from 'swiper/angular';
import { AutoplayOptions, SwiperEvents } from 'swiper/types';

SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-products-swiper',
  templateUrl: './products-swiper.component.html',
  styleUrls: ['./products-swiper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsSwiperComponent implements OnInit {
  @Input() public collectionId!: number
  @Input() public backwards = false;
  public slides: any = productsSwiperMock
  public items$!: Observable<IItem[]>
  public config!: SwiperOptions

  @ViewChild('swiper', { static: false }) swiperEl?: SwiperComponent;

  constructor(
    private dataManagement: DataManagementService,
  ) { }



  ngOnInit(): void {
    this.config = productsSwiperConfig(this.backwards)

    this.items$ = this.dataManagement.getCollectionItems(this.collectionId)
  }

  public onSwiper(params: any) {
    if (this.backwards) {
      this.swiperEl?.swiperRef.slideToLoop(100)
      this.items$.pipe(
        map(items => this.swiperEl?.swiperRef.slideToLoop(items.length - 1))
      )
    }
  }

  public onResize(e: any) {
    // console.log('resize', e);
    // this.swiperEl?.swiperRef.updateSize()
    // this.swiperEl?.swiperRef.update()
    // this.swiperEl?.swiperRef.updateSlides()
  }

  private updateConfig() {
    console.log('update');
    this.config = productsSwiperConfig(this.backwards)
  }

}
