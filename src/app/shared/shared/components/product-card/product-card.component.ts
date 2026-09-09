import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product!: Product;

  @Input() favorite = false;

  @Output()
  wishlist = new EventEmitter<Product>();

  addToWishlist(): void {
    this.wishlist.emit(this.product);
  }

}