import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectsService } from '../../shared/services/objects.service';

@Component({
  selector: 'app-customer-address',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-address.component.html',
  styleUrl: './customer-address.component.css'
})
export class CustomerAddressComponent {
  @Input() names: string[] = []
  @Output() sendData = new EventEmitter<string>()

  objNames: any
  sendMessage() {
    this.sendData.emit("Hello from address")
  }
  constructor(private svcObjects: ObjectsService) {
    this.objNames= svcObjects.serviceName
  }
}
