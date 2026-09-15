import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogPageComponent } from './modules/catalog/components/catalog-page/catalog-page.component';

const routes: Routes = [
  // Todo camino lleva directo al catálogo
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'catalog', component: CatalogPageComponent },
  { path: '**', redirectTo: 'catalog' } // Desactivada la ruta 404 por completo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }