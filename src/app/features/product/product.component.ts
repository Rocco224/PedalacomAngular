import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCallService } from '../../shared/crudhttp/product-call.service';
import { Product } from '../../shared/modelsData/ProductModel/Product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  ProductClass: Product[]=[]

  constructor(private ps: ProductCallService) { }
  GetProductByService() {
    this.ps.getProductData().subscribe({
      next:(data:any)=>{
        this.ProductClass= data.$values;
      },
      error:(err: any)=>{
        console.log(err);
      }
    })
  }
}
