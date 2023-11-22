import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerAddressCallService {

  constructor(private http: HttpClient) { }

  getCustomerAddress() {
    // appunto del 22/11 il link qui sotto è per costumer non per costumer address
    return this.http.get('http://localhost:5150/api/Customers')
  }
}
