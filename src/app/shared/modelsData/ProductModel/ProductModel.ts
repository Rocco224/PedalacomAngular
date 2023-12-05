import { ProductModelProductDescription } from "./ProductModelProductDescription";
import { Product } from "./Product";
export class ProductModel{
    productModelId=0;
    name='';
    catalogDescription='';
    rowguid: any;
    modifiedDate: any;
    productModelProductDescriptions: ProductModelProductDescription[]=[];
    products: Product[]= [];


}