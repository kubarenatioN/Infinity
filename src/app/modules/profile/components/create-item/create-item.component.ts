import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
