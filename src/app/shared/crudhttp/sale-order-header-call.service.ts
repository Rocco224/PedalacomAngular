import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable'
import { SalesOrderHeader } from '../modelsData/OrderModel/SalesOrderHeader';

@Injectable({
  providedIn: 'root'
})
export class SaleOrderHeaderCallService {
  private URL='http://localhost:5150/api/SalesOrderHeaders'
  getProductData(): Observable<any> {
    return this.http.get<any>(this.URL)
  }
  constructor(private http: HttpClient) { }
}
