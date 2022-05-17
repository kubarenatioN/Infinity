import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  { 
    path: 'main', 
    loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule),
    data: {
      id: 'main'
    }
  },
  { path: 'explore', loadChildren: () => import('./modules/explore/explore.module').then(m => m.ExploreModule) },
  { path: 'product', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
