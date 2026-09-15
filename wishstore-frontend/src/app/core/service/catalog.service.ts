import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '@env/environment';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/api/v1/catalog`;

  getProducts(): Observable<Product[]> {
    return this.http.get<any>(`${this.baseUrl}/products`).pipe(
      map(response => {
        // Garantiza extraer el arreglo independientemente del formato de la API
        if (Array.isArray(response)) return response;
        if (response && Array.isArray(response.data)) return response.data;
        if (response && Array.isArray(response.products)) return response.products;
        return [];
      }),
      catchError(err => {
        console.error('Error al conectar con la API de Railway:', err);
        return of([]); // Retorna lista vacía sin congelar la app
      })
    );
  }
}