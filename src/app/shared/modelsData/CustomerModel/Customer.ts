import { SalesOrderHeader } from "../OrderModel/SalesOrderHeader";
import { CustomerAddress } from "./CustomerAddress";
export class Customer{
    CustomerId=0;
    NameStyle: boolean=false;
    Title='';
    FirstName='';
    MiddleName='';
    LastName='';
    Suffix='';
    CompanyName='';
    SalesPerson='';
    EmailAddress='';
    Phone='';
    PasswordHash='';
    PasswordSalt='';
    Rowguid: any;
    ModifiedDate:any;
    Valid: any;
    CustomerAddresses: CustomerAddress[]=[];
    SalesOrderHeaders: SalesOrderHeader[]=[];

}