import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable'
import { Product } from '../modelsData/ProductModel/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductCallService {
  private ProductURL='http://localhost:5150/api/Products'

  constructor(private http: HttpClient) { }

  getProductData(): Observable<any> {
    return this.http.get<any>(this.ProductURL)
  }
  postProduct(product: Product) {
    return this.http.post(this.ProductURL,product)
    
  }
}
