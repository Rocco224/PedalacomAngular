import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCallService } from '../../shared/crudhttp/product-call.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private ps: ProductCallService) { }
  GetProductByService() {
    this.ps.getProductData().subscribe({
      next:(data:any)=>{}
    })
  }
}
