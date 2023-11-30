import { ProductCategory } from "./ProductCategory";
import { ProductModel } from "./ProductModel";
import { SalesOrderDetail } from "../OrderModel/SalesOrderDetail";
export class Product{
    ProductId = 0;
    Name = '';
    ProductNumber = '';
    Color = '';
    StandardCost = 0.00;
    ListPrice = 0.00;
    Size = '';
    Weight = 0.00;
    ProductCategoryId = 0;
    ProductModelId = 0;
    SellStartDate : any;
    SellEndDate: any;
    DiscontinuedDate: any;
    ThumbNailPhoto = 0;
    ThumbnailPhotoFileName = '';
    Rowguid: any;
    ModifiedDate: any;
    ProductCategory: ProductCategory | undefined;
    ProductModel: ProductModel | undefined;
    SalesOrderDetails: SalesOrderDetail[] = [];

    



}