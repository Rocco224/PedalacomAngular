import { SalesOrderHeader } from "../OrderModel/SalesOrderHeader";
import { CustomerAddress } from "./CustomerAddress";
export class Customer{
    customerId=0;
    nameStyle: boolean=false;
    title='';
    firstName='';
    middleName='';
    lastName='';
    suffix='';
    companyName='';
    salesPerson='';
    emailAddress='';
    phone='';
    passwordHash='';
    passwordSalt='';
    rowguid: any;
    modifiedDate:any;
    valid: any;
    customerAddresses: CustomerAddress[]=[];
    salesOrderHeaders: SalesOrderHeader[]=[];

}