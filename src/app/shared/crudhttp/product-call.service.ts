import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductCallService {

  constructor(private http: HttpClient) { }

  getProductData(): Observable<any> {
    return this.http.get('http://localhost:5150/api/Products')
  }
}
