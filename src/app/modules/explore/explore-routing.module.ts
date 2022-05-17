import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './components/collections/collections.component';
import { ExploreComponent } from './explore.component';

const routes: Routes = [
  { path: '', component: CollectionsComponent },
  { path: 'collection', component: ExploreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
