import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-top-collections',
  templateUrl: './top-collections.component.html',
  styleUrls: ['./top-collections.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopCollectionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
