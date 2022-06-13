import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { ICollection } from 'src/app/typings/collection';
import { ICollectionAttribute } from 'src/app/typings/collection-attribute';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCollectionComponent implements OnInit {
  public attributes = [] as ICollectionAttribute[]
  public model = {
    image: '',
  } as ICollection

  constructor() { }

  ngOnInit(): void {
  }

  public addAttribute(event: MatChipInputEvent) {
    const value = (event.value || '').trim();

    if (value && !this.attributes.map(a => a.name).includes(value)) {
      this.attributes.push({
        name: value,
        options: [],
      });
    }

    event.chipInput!.clear();
  }

  public removeAttribute(name: string) {
    this.attributes = this.attributes.filter(a => a.name !== name)
  }

  public removeOption(options: string) {

  }

  public create() {
    // this.model.attributes = this.attributes
    console.log(this.model);
  }
}
