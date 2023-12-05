import { Address } from "../CustomerModel/Address";
import { SalesOrderDetail } from "./SalesOrderDetail";

export class SalesOrderHeader{
    salesOrderId=0;
    revisionNumber=0;
    orderDate: any;
    dueDate: any;
    shipDate: any;
    status=0;
    onlineOrderFlag: boolean=true;
    salesOrderNumber='';
    purchaseOrderNumber='';
    accountNumber='';
    customerId=0;
    shipToAddressId=0;
    billToAddressId=0;
    shipMethod='';
    creditCardApprovalCode='';
    subTotal=0.00;
    taxAmt=0.00;
    freight=0.00;
    totalDue=0.00;
    comment=0.00;
    rowguid: any;
    modifiedDate:any;
    billToAddress: Address=new Address;
    salesOrderDetails:SalesOrderDetail[]=[];
    shipToAddress: Address=  new Address;


}
