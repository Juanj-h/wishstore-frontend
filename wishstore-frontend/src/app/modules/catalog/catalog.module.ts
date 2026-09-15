import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';

@NgModule({
  declarations: [
     
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    CatalogPageComponent

  ]
})
export class CatalogModule {}