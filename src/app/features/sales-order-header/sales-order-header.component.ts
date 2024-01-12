import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleOrderHeaderCallService } from '../../shared/crudhttp/sale-order-header-call.service';
import { SalesOrderHeader } from '../../shared/modelsData/OrderModel/SalesOrderHeader';

@Component({
  selector: 'app-sales-order-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-order-header.component.html',
  styleUrl: './sales-order-header.component.css',
  providers: [SaleOrderHeaderCallService]
})
export class SalesOrderHeaderComponent {
  Header: SalesOrderHeader[] = []
  constructor(private ss: SaleOrderHeaderCallService){}
  getProduct() {
    this.ss.getProductData().subscribe({
    
      next: (result: any) => {
       
        this.Header = result;
        console.log('sono nel next ', this.Header[0])
       
      },
      error: (err: any) => {
        console.log('errore')
        console.log(err);
      }
    })
  }
  ngOnInit() {
    
    this.getProduct();
  }
}
