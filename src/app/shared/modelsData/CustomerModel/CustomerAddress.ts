import { Address } from "./Address";
import { Customer } from "./Customer";

export class CustomerAddress{
    CustomerId=0;
    AddressId=0;
    AddressType='';
    Rowguid: any;
    ModifiedDate: any;
    Address:Address= new Address;
    Customer: Customer= new Customer;
}