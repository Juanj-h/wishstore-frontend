import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '@core/service/catalog.service';
import { WishlistService } from '@core/service/wishlist.service';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-catalog-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../../../../modules/catalog/components/catalog-page/catalog-page.html',
  styleUrls: ['../../../../modules/catalog/components/catalog-page/catalog-page.scss']
})
export class CatalogPageComponent implements OnInit {
  private catalogService = inject(CatalogService);
  private wishlistService = inject(WishlistService);

  products: Product[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    this.catalogService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  toggleWishlist(product: Product): void {
    if (this.isInWishlist(product)) {
      this.wishlistService.removeFromWishlist(product.id).subscribe();
    } else {
      this.wishlistService.addToWishlist(product).subscribe();
    }
  }

  isInWishlist(product: Product): boolean {
    return this.wishlistService.isInWishlist(product);
  }
}