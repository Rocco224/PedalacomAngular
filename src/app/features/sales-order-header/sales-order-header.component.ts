import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleOrderHeaderCallService } from '../../shared/crudhttp/sale-order-header-call.service';
import { SalesOrderHeader } from '../../shared/modelsData/OrderModel/SalesOrderHeader';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-sales-order-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-order-header.component.html',
  styleUrl: './sales-order-header.component.css',
  providers: [SharedService]
})
export class SalesOrderHeaderComponent {
  _path = 'http://localhost:5150/api/SalesOrderHeaders'
  _ordersList: any = [];

  constructor(private sharedService: SharedService) { }

  getOrder() {
    this.sharedService.ReadData(this._path).subscribe({
      next: (data: any) => {
        this._ordersList = data.body;
        console.log(this._ordersList);
        console.log(this._ordersList[0].salesOrderId)
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  ngOnInit() {
    this.getOrder();
  }
}
