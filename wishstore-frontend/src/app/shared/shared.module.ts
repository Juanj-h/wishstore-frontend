import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  imports: [
    CommonModule,
    NavbarComponent,       
    ProductCardComponent 
  ],
  exports: [
    NavbarComponent,       
    ProductCardComponent
  ]
})
export class SharedModule {}