import { NgModule } from '@angular/core';
import { HomeRoutingModule } from '../home/home-routing.module';
import { HomeComponent } from '../home/home.component'; // Ajusta la ruta si tu archivo está directamente en './home.component'

@NgModule({
  imports: [
    HomeRoutingModule,
    HomeComponent // 👈 Debe ir en 'imports' porque HomeComponent es Standalone
  ]
})
export class HomeModule {}