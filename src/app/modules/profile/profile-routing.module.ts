import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { CreateCollectionComponent } from './components/create-collection/create-collection.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { CreateComponent } from './components/create/create.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent, pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { 
    path: 'create', 
    component: CreateComponent,
    children: [
      {
        path: '',
        redirectTo: 'item',
      },
      {
        path: 'collection',
        component: CreateCollectionComponent,
      },
      {
        path: 'item',
        component: CreateItemComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
