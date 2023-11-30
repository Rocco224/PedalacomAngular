import { Product } from "./Product";
export class ProductCategory{
    constructor() { }
    ProductCategoryId = 0;
    ParentProductCategoryId: any;
    Name = '';
    Rowguid: any;
    ModifiedDate: any;
    InverseParentProductCategory: ProductCategory[] = [];
    ParentProductCategory: ProductCategory= new ProductCategory;
    Products: Product= new Product;
}