import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { productsSwiperMock } from 'src/app/mocks/products-swiper.mock';
import { IItem } from 'src/app/typings/item';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent implements OnInit {
  
  @Input() public items!: IItem[]

  constructor() { }

  ngOnInit(): void {
  }

}
