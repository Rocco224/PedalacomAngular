import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable'

@Injectable({
  providedIn: 'root'
})
export class CustomerCallService {
  private CustomerURL = 'http://localhost:5150/api/Customers'

  constructor(private http: HttpClient) { }

  getProductData(): Observable<any> {
    return this.http.get<any>(this.CustomerURL)
  }
}
