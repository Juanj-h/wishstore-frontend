import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { History } from '../../models/history.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private apiUrl = `${environment.apiUrl}/history`;

  constructor(private http: HttpClient) {}

  getHistory(): Observable<History[]> {
    return this.http.get<History[]>(this.apiUrl);
  }

  getHistoryByWishlist(wishlistId: number): Observable<History[]> {
    return this.http.get<History[]>(
      `${this.apiUrl}/wishlist/${wishlistId}`
    );
  }

  getHistoryByProduct(productId: number): Observable<History[]> {
    return this.http.get<History[]>(
      `${this.apiUrl}/product/${productId}`
    );
  }
}