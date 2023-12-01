import { Product } from "../ProductModel/Product";
import { SalesOrderHeader } from "./SalesOrderHeader";

export class SalesOrderDetail{
    SalesOrderId=0;
    SalesOrderDetailId=0;
    OrderQty=0;
    ProductId=0;
    UnitPrice=0.00;
    UnitPriceDiscount=0.00;
    LineTotal=0.00;
    Rowguid: any;
    ModifiedDate: any;
    Product: Product= new Product;
    SalesOrder: SalesOrderHeader= new SalesOrderHeader;
}