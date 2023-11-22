import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddressComponent } from '../customer-address/customer-address.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule,CustomerAddressComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  names: string[] = ['simone', 'davide', 'lucrezia']
  receivedData: string = ''
  receivedDataFromAddress(data: string) {
    this.receivedData=data
  }
}
