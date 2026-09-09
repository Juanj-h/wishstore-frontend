import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogPageComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class CatalogRoutingModule {}