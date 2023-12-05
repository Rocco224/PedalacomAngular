import { SalesOrderHeader } from "../OrderModel/SalesOrderHeader";
import { CustomerAddress } from "./CustomerAddress";

export class Address{
    addressId=0;
    addressLine1='';
    addressLine2='';
    city='';
    stateProvince='';
    countryRegion='';
    postalCode='';
    rowguid: any;
    modifiedDate: any;
    customerAddresses:CustomerAddress[]=[];
    salesOrderHeaderBillToAddresses:SalesOrderHeader[]=[];
    salesOrderHeaderShipToAddresses:SalesOrderHeader[]=[]

}