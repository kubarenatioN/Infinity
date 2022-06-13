import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { AuthComponent } from './components/auth/auth.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule, MAT_CHIPS_DEFAULT_OPTIONS} from '@angular/material/chips';
import { CreateCollectionComponent } from './components/create-collection/create-collection.component';
import { CreateComponent } from './components/create/create.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProfileComponent,
    AuthComponent,
    CreateCollectionComponent,
    CreateComponent,
    CreateItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
