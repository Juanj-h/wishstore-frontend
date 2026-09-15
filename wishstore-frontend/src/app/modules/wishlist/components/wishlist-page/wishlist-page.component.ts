import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { WishlistService } from '../../../../core/service/wishlist.service';
import { Product } from '../../../../models/product.model';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-wishlist-page',
  standalone: true, 
  imports: [
    CommonModule, 
    ProductCardComponent 
  ],
  template: `
    <h2>Mi Lista de Deseos</h2>
    <div *ngIf="(items$ | async)?.length === 0">No tienes productos guardados.</div>
    <div style="display: flex; gap: 20px; flex-wrap: wrap;">
      <app-product-card 
        *ngFor="let product of items$ | async" 
        [product]="product"
        [isWishlisted]="true"
        (toggleWishlist)="removeItem(product.id)">
      </app-product-card>
    </div>
  `
})
export class WishlistPageComponent {
  // Inyección directa para evitar errores de orden de inicialización
  private wishlistService = inject(WishlistService);
  
  items$: Observable<Product[]> = this.wishlistService.items$;

  removeItem(id: number): void {
    this.wishlistService.removeFromWishlist(id);
  }
}