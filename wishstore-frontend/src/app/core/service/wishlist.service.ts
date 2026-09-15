import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { environment } from '@env/environment';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/api/v1/wishlist`;
  
  private itemsSubject = new BehaviorSubject<Product[]>([]);
  public items$: Observable<Product[]> = this.itemsSubject.asObservable();

  private wishlistIds = signal<Set<string | number>>(new Set());

  getWishlist(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      tap((items) => {
        const productList = Array.isArray(items) ? items : [];
        this.itemsSubject.next(productList);
        
        const ids = new Set(
          productList.map((item: any) => item.productId ?? item.id)
        );
        this.wishlistIds.set(ids);
      })
    );
  }

  addToWishlist(param: string | number | Product): Observable<any> {
    const isObject = typeof param === 'object' && param !== null;
    const productId = isObject ? (param as Product).id : param;
    const productObj = isObject ? (param as Product) : ({ id: param } as unknown as Product);

    return this.http.post(this.baseUrl, { productId }).pipe(
      tap(() => {
        const currentIds = new Set(this.wishlistIds());
        currentIds.add(productId);
        this.wishlistIds.set(currentIds);

        const currentItems = this.itemsSubject.getValue();
        if (!currentItems.some(item => item.id === productId)) {
          this.itemsSubject.next([...currentItems, productObj]);
        }
      })
    );
  }

  removeFromWishlist(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      tap(() => {
        const currentIds = new Set(this.wishlistIds());
        currentIds.delete(id);
        this.wishlistIds.set(currentIds);

        const updatedItems = this.itemsSubject.getValue().filter(item => item.id !== id);
        this.itemsSubject.next(updatedItems);
      })
    );
  }

  isInWishlist(param: string | number | Product): boolean {
    const id = typeof param === 'object' && param !== null ? param.id : param;
    return this.wishlistIds().has(id);
  }
}