import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuctionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
