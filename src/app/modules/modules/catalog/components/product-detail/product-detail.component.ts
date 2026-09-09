import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Product } from '../../../../models/product.model';
import { CatalogService } from '../../../../core/services/catalog.service';
import { WishlistService } from '../../../../core/services/wishlist.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product?: Product;

  loading = false;
  error = false;

  private userId = 1;

  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService,
    private wishlistService: WishlistService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const id = Number(params.get('id'));

      if (id) {
        this.loadProduct(id);
      }

    });

  }

  loadProduct(id: number): void {

    this.loading = true;
    this.error = false;

    this.catalogService
      .getProductById(id)
      .subscribe({

        next: product => {

          this.product = product;
          this.loading = false;

        },

        error: () => {

          this.loading = false;
          this.error = true;

          this.snackBar.open(
            'No fue posible cargar el producto.',
            'Cerrar',
            { duration: 3000 }
          );

        }

      });

  }

  addToWishlist(): void {

    if (!this.product) {
      return;
    }

    this.wishlistService
      .addToWishlist(this.userId, this.product.id)
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