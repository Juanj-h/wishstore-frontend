import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';

const routes: Routes = [
  // ⚠️ IMPORTANTE: El path debe ser '' para que responda a /catalog
  { path: '', component: CatalogPageComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }