import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCallService } from '../../shared/crudhttp/product-call.service';
import { Product } from '../../shared/modelsData/ProductModel/Product';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ProductCategory } from '../../shared/modelsData/ProductModel/ProductCategory';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [ProductCallService]
  
})
export class ProductComponent implements OnInit {
  Products: ProductCategory[] = []
  insert: boolean = false;
  view: boolean = false;
  value: string = ''
  newProduct: Product[]=[]
  priceMin=0
      priceMax=1000000000
      category:any=''
      color=''
 
  FilterOn: boolean= false;
  FilterForm!: FormGroup;
  constructor(private ps: ProductCallService, private formBuilder: FormBuilder) {
   }
 
   submitForm(form: any): void {
    if (form.valid) {
      // Puoi eseguire qui l'invio del form o eseguire altre azioni
      this.newProduct[0]= form.value
      console.log(form.value);
      console.log("ogetto",this.newProduct[0]);
      this.postProduct()

    }
    
  }

  FilterSubmit(){
    var priceMinControl: any = this.FilterForm.get('PriceMin');
    var priceMaxControl: any = this.FilterForm.get('PriceMax');
    var CategoryControl: any = this.FilterForm.get('Category');
    var ColorControl: any = this.FilterForm.get('Color');
    if (priceMinControl.value != null){
       this.priceMin= priceMinControl.value;
    }
    else {
      this.priceMin=0
    }
    if (priceMaxControl.value != null){
      this.priceMax= priceMaxControl.value;
   }
   else {
     this.priceMax=0
   }
    if (CategoryControl.value != "Filter by category"){
      this.category= CategoryControl.value;
   }
   else {
     this.category=""
   }
   if (ColorControl.value != null){
    this.color= this.FilterForm.get('Color')!.value;
    this.color=this.color.toLowerCase()
    var x=this.color[0].toUpperCase()

    this.color=this.color!.substring(1,)
    this.color=x.concat(this.color)
    console.log(this.color)

    }
    else {
      this.color='';
    }

  }
  getProduct() {
    this.ps.getProductData().subscribe({
    
      next: (result: any) => {
       
        this.Products = result;
        console.log('sono nel next product ', this.Products[8])
       
      },
      error: (err: any) => {
        console.log('errore')
        console.log(err);
      }
    })
  }
  postProduct() {
    this.ps.postProductData(this.newProduct[0]).subscribe({
    
      next: (result: any) => {
       
        
        console.log('inserimento riuscito')
       
      },
      error: (err: any) => {
        console.log('errore nel post')
        console.log(err);
      }
    })
  }
  ngOnInit() {
    this.FilterForm=this.formBuilder.group({
      PriceMin:0,
      PriceMax:1000000000,
      Category:0,
      Color:""
    })
    
    this.getProduct();
  }
  cngInsert() {
    this.insert = !this.insert
  }
  cngView() {
    this.view = !this.view
  }
  getImage(s: any) {
    return `data:image/jpeg;base64,${s}`
  }

}