import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { CatalogRoutingModule } from './catalog-routing.module';

import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';

@NgModule({
  declarations: [
    CatalogPageComponent,
    ProductDetailComponent,
    ProductSearchComponent,
    CategoryFilterComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    CatalogRoutingModule
  ],

  exports: [
    CatalogPageComponent,
    ProductDetailComponent
  ]
})
export class CatalogModule {}