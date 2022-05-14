import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
