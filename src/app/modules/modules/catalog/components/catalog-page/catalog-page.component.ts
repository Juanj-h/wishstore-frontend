import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Product } from '../../../../models/product.model';
import { CatalogService } from '../../../../core/services/catalog.service';
import { WishlistService } from '../../../../core/services/wishlist.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {

  products: Product[] = [];

  loading = false;
  error = false;

  private userId = 1;

  constructor(
    private catalogService: CatalogService,
    private wishlistService: WishlistService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {

    this.loading = true;
    this.error = false;

    this.catalogService.getProducts()
      .subscribe({
        next: products => {

          this.products = products;

          this.loading = false;
        },

        error: () => {

          this.loading = false;
          this.error = true;

          this.snackBar.open(
            'No fue posible cargar los productos.',
            'Cerrar',
            { duration: 3000 }
          );

        }
      });
  }

  searchProducts(products: Product[]): void {

    this.products = products;

  }

  filterByCategory(category: string): void {

    if (!category) {
      this.loadProducts();
      return;
    }

    this.loading = true;
    this.error = false;

    this.catalogService
      .getProductsByCategory(category)
      .subscribe({

        next: products => {
          this.products = products;
          this.loading = false;
        },

        error: () => {

          this.loading = false;
          this.error = true;

          this.snackBar.open(
            'No fue posible cargar los productos.',
            'Cerrar',
            { duration: 3000 }
          );

        }

      });

  }

  addToWishlist(product: Product): void {

    this.wishlistService
      .addToWishlist(this.userId, product.id)
      .subscribe({

        next: () => {

          this.snackBar.open(
            'Producto agregado a favoritos.',
            'Cerrar',
            { duration: 3000 }
          );

        },

        error: () => {

          this.snackBar.open(
            'No fue posible modificar la lista de deseos.',
            'Cerrar',
            { duration: 3000 }
          );

        }

      });

  }

}