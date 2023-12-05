import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCallService } from '../../shared/crudhttp/product-call.service';
import { Product } from '../../shared/modelsData/ProductModel/Product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [ProductCallService]
})
export class ProductComponent implements OnInit {
  Products: Product[]=[]

  constructor(private ps: ProductCallService) { }
  getProduct() {
    this.ps.getProductData().subscribe({
    
     next: (result: any) => {
       
       this.Products = result;
       console.log('sono nel next ',this.Products[0])
       
      },
     error: (err: any) => {
        console.log('errore')
        console.log(err);
      }
   })
  }
  ngOnInit() {
    console.log('avvio funzione')
    this.getProduct();
   
  }
}
