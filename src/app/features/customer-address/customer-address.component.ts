import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ObjectsService } from '../../shared/services/objects.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CustomerAddress } from '../../shared/modelsData/customer-address';

@Component({
  selector: 'app-customer-address',
  standalone: true,
  imports: [CommonModule,FormsModule, NgFor],
  templateUrl: './customer-address.component.html',
  styleUrl: './customer-address.component.css'
})
export class CustomerAddressComponent {
  @Input() names: string[] = []
  @Output() sendData = new EventEmitter<string>()
  address: CustomerAddress=new CustomerAddress()
  addressArray: CustomerAddress[] = []
  startFormAddress: boolean = false;
  objNames: any
  cngStartFormAddress() {
    this.startFormAddress = !this.startFormAddress;
  }
  sendMessage() {
    this.sendData.emit("Hello from address")
  }
  constructor(private svcObjects: ObjectsService) {
    this.objNames= svcObjects.serviceName
  }
  InsertDataFrm(frm: NgForm) {
    this.addressArray.push(frm.value)
    console.log(frm.value)
    console.log(this.addressArray)
    frm.reset();
  }
}
