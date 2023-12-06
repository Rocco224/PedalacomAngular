import { ProductCategory } from "./ProductCategory";
import { ProductModel } from "./ProductModel";
import { SalesOrderDetail } from "../OrderModel/SalesOrderDetail";
export class Product{
    productId = 0;
    name = '';
    productNumber = '';
    color = '';
    standardCost = 0.00;
    listPrice = 0.00;
    size = '';
    weight = 0.00;
    productCategoryId = 0;
    productModelId = 0;
    sellStartDate : any;
    sellEndDate: any;
    discontinuedDate: any;
    thumbNailPhoto : any;
    thumbnailPhotoFileName = '';
    rowguid: any;
    modifiedDate: any;
    productCategory: ProductCategory = new ProductCategory;
    productModel: ProductModel = new ProductModel;
    salesOrderDetails: SalesOrderDetail[] = [];

    



}