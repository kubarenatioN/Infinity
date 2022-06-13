import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IItem } from 'src/app/typings/item';

@Component({
  selector: 'app-nft-card',
  templateUrl: './nft-card.component.html',
  styleUrls: ['./nft-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NftCardComponent implements OnInit {
  @Input() public item!: IItem

  constructor() { }

  ngOnInit(): void {
  }

}
