import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerCallService } from '../../shared/crudhttp/customer-call.service';
import { Customer } from '../../shared/modelsData/CustomerModel/Customer';



@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
  providers:[CustomerCallService]
})
export class CustomerComponent implements OnInit {
  Customers: Customer[] = []
  constructor(private cs: CustomerCallService) { }
  getCustomer() {
    this.cs.getProductData().subscribe({
    
     next: (result: any) => {
       
       this.Customers = result;
       console.log('sono nel next ',this.Customers[0])
       
      },
     error: (err: any) => {
        console.log('errore')
        console.log(err);
      }
   })
  }
  ngOnInit() {
    console.log('avvio funzione')
    this.getCustomer();
   
  }
  
}
