import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { ProductCategory } from '../../shared/modelsData/ProductModel/ProductCategory';
import { ProductCallService } from '../../shared/crudhttp/product-call.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ProductComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ProductCallService]
})
export class HomeComponent implements OnInit{
  Products: ProductCategory[] = []
  ngOnInit() {
    
    this.getProduct();
  }

    constructor(private ps: ProductCallService) { }
 getProduct() {
    this.ps.getProductData().subscribe({
    
     next: (result: any) => {
       
       this.Products = result;
       console.log('sono nel next ',this.Products[5])
       
      },
     error: (err: any) => {
        console.log('errore')
        console.log(err);
      }
   })
 }
 getImage(s: any) {
  return `data:image/jpeg;base64,${s}`
}
  
}
