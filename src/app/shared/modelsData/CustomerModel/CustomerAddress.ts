import { Address } from "./Address";
import { Customer } from "./Customer";

export class CustomerAddress{
    customerId=0;
    addressId=0;
    addressType='';
    rowguid: any;
    modifiedDate: any;
    address:Address= new Address;
    customer: Customer= new Customer;
}