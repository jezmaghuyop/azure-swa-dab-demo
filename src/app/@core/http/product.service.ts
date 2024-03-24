import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly http: HttpClient = inject(HttpClient);

  getAll() : Observable<Product[]> {
    return this.http.get<Product[]>('/data-api/rest/products');
  }
}
