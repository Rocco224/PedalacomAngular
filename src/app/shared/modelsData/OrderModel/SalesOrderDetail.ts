import { Product } from "../ProductModel/Product";
import { SalesOrderHeader } from "./SalesOrderHeader";

export class SalesOrderDetail{
    salesOrderId=0;
    salesOrderDetailId=0;
    orderQty=0;
    productId=0;
    unitPrice=0.00;
    unitPriceDiscount=0.00;
    lineTotal=0.00;
    rowguid: any;
    modifiedDate: any;
    product: Product= new Product;
    salesOrder: SalesOrderHeader= new SalesOrderHeader;
}