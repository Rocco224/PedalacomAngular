import { SalesOrderHeader } from "../OrderModel/SalesOrderHeader";
import { CustomerAddress } from "./CustomerAddress";

export class Customer{
    CustomerId = undefined;
    NameStyle: boolean=false;
    Title = undefined;
    FirstName='';
    MiddleName = undefined;
    LastName='';
    Suffix = undefined;
    CompanyName = undefined;
    SalesPerson = undefined;
    EmailAddress = undefined;
    Phone = undefined;
    PasswordHash='';
    PasswordSalt='';
    Rowguid = undefined;
    ModifiedDate = undefined;
    Valid = undefined;
    Role = "Admin";
    CustomerAddresses = undefined;
    SalesOrderHeaders = undefined;
}