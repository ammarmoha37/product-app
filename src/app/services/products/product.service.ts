import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string = 'https://fakestoreapi.com/';

  constructor( private http: HttpClient) { }

  getAllProductsWithLimit(limit = 10) {
    const productsUrl: string = `${this.baseUrl}products?limit=${limit}`
    return this.http.get<any>(productsUrl);
  }

  createProduct(product: Product) {
    const productsUrl = `${this.baseUrl}products`;
    return this.http.post<Product>(productsUrl, product);
  }
}
