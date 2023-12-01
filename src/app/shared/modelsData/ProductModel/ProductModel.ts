import { ProductModelProductDescription } from "./ProductModelProductDescription";
import { Product } from "./Product";
export class ProductModel{
    ProductModelId=0;
    Name='';
    CatalogDescription='';
    Rowguid: any;
    ModifiedDate: any;
    ProductModelProductDescriptions: ProductModelProductDescription[]=[];
    Products: Product[]= [];


}