import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { collectionsMock } from 'src/app/mocks/collections.mock';

@Component({
  selector: 'app-top-collections',
  templateUrl: './top-collections.component.html',
  styleUrls: ['./top-collections.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopCollectionsComponent implements OnInit {
  public items = collectionsMock
  
  constructor() { }

  ngOnInit(): void {
  }

}
