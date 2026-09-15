import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true, 
  
  template: `'./product-card.component.html'
    <div style="border: 1px solid #ccc; padding: 15px; border-radius: 8px; width: 200px;">
      <img [src]="product.imageUrl" [alt]="product.name" width="100%">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p><strong>\${{ product.price }}</strong></p>
      <button (click)="toggleWishlist.emit(product)">
        {{ isWishlisted ? '❤️ Quitar' : '🤍 Añadir a Deseos' }}
      </button>
    </div>
  `
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() isWishlisted: boolean = false;
  @Output() toggleWishlist = new EventEmitter<Product>();
}