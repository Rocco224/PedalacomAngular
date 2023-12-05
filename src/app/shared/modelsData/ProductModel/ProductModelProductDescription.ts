import { ProductModel } from "./ProductModel";
import { ProductDescription } from "./ProductDescription";
export class ProductModelProductDescription{
    productModelId=0;
    productDescriptionId=0;
    culture='';
    rowguid: any;
    modifiedDate: any;
    productDescription: ProductDescription= new ProductDescription;
    productModel: ProductModel= new ProductModel;
}