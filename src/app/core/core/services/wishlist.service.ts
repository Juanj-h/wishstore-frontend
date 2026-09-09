import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Wishlist } from '../../models/wishlist.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private apiUrl = `${environment.apiUrl}/wishlist`;

  constructor(private http: HttpClient) {}

  getWishlistByUser(userId: number): Observable<Wishlist[]> {
    return this.http.get<Wishlist[]>(
      `${this.apiUrl}/user/${userId}`
    );
  }

  addToWishlist(
    userId: number,
    productId: number
  ): Observable<Wishlist> {

    return this.http.post<Wishlist>(
      this.apiUrl,
      {
        userId,
        productId
      }
    );
  }

  removeFromWishlist(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );
  }
}