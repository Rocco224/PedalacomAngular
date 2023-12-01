import { Address } from "../CustomerModel/Address";
import { SalesOrderDetail } from "./SalesOrderDetail";

export class SalesOrderHeader{
    SalesOrderId=0;
    RevisionNumber=0;
    OrderDate: any;
    DueDate: any;
    ShipDate: any;
    Status=0;
    OnlineOrderFlag: boolean=true;
    SalesOrderNumber='';
    PurchaseOrderNumber='';
    AccountNumber='';
    CustomerId=0;
    ShipToAddressId=0;
    BillToAddressId=0;
    ShipMethod='';
    CreditCardApprovalCode='';
    SubTotal=0.00;
    TaxAmt=0.00;
    Freight=0.00;
    TotalDue=0.00;
    Comment=0.00;
    Rowguid: any;
    ModifiedDate:any;
    BillToAddress: Address=new Address;
    SalesOrderDetails:SalesOrderDetail[]=[];
    ShipToAddress: Address=  new Address;


}
