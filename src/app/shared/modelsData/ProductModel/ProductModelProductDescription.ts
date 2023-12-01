import { ProductModel } from "./ProductModel";
import { ProductDescription } from "./ProductDescription";
export class ProductModelProductDescription{
    ProductModelId=0;
    ProductDescriptionId=0;
    Culture='';
    Rowguid: any;
    ModifiedDate: any;
    ProductDescription: ProductDescription= new ProductDescription;
    ProductModel: ProductModel= new ProductModel;
}