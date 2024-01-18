import { SalesOrderHeader } from "../OrderModel/SalesOrderHeader";
import { CustomerAddress } from "./CustomerAddress";

export class Customer{
    customerId : any;
    nameStyle: boolean=false;
    title : any;
    firstName='';
    middleName : any;
    lastName='';
    suffix : any;
    companyName : any;
    salesPerson : any;
    emailAddress : any;
    phone : any;
    passwordHash='';
    passwordSalt='';
    Rowguid : any;
    modifiedDate : any;
    valid : any;
    role = "Admin";
    customerAddresses : any;
    salesOrderHeaders : any;
}