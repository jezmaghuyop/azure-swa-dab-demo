import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Response, Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http: HttpClient = inject(HttpClient);

  getAll(): Observable<Product[]> {
    return this.http
      .get<Response<Product[]>>('/data-api/rest/products')
      .pipe(map((response) => response.value));
  }

  get(id: number): Observable<Product> {
    return this.http
      .get<Response<Product[]>>(`/data-api/rest/products/Id/${id}`)
      .pipe(map((response) => response.value[0]));
  }

  filter(take: number = 100, orderBy: string = 'Id', order: 'asc' | 'desc' = 'asc'): Observable<Product[]> {
    return this.http
      .get<Response<Product[]>>(`/data-api/rest/products?$first=${take}&$orderby=${orderBy} ${order}`)
      .pipe(map((response) => response.value));
  }
}
