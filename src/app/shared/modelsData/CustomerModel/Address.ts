import { SalesOrderHeader } from "../OrderModel/SalesOrderHeader";
import { CustomerAddress } from "./CustomerAddress";

export class Address{
    AddressId=0;
    AddressLine1='';
    AddressLine2='';
    City='';
    StateProvince='';
    CountryRegion='';
    PostalCode='';
    Rowguid: any;
    ModifiedDate: any;
    CustomerAddresses:CustomerAddress[]=[];
    SalesOrderHeaderBillToAddresses:SalesOrderHeader[]=[];
    SalesOrderHeaderShipToAddresses:SalesOrderHeader[]=[]

}