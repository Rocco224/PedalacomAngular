import { Product } from "./Product";
export class ProductCategory{
    constructor() { }
    productCategoryId = 0;
    parentProductCategoryId: any;
    name = '';
    rowguid: any;
    modifiedDate: any;
    inverseParentProductCategory: ProductCategory[] = [];
    parentProductCategory: ProductCategory= new ProductCategory;
    products: Product[]= [];
}