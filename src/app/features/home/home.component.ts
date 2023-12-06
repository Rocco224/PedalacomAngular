import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../shared/modelsData/ProductModel/Product';
import { ProductCallService } from '../../shared/crudhttp/product-call.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ProductCallService]
})
export class HomeComponent implements OnInit{
  Products: Product[] = []
  ngOnInit() {
    
    this.getProduct();
  }

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
  
}
