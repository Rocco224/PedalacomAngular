import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
    InHome: boolean = false;
    InCustomer: boolean = true;
    InOrder: boolean = true;
    InProduct:boolean=true;
    customerClick() {
      this.InHome = true;
      this.InCustomer = false;
      this.InOrder = true;
      this.InProduct=true;
    }
    HomeClick() {
      this.InHome = false;
      this.InCustomer = true;
      this.InOrder = true;
      this.InProduct=true;
    }
    OrderClick() {
      this.InHome = true;
      this.InCustomer = true;
      this.InOrder = false;
      this.InProduct=true;
     }
     ProductClick(){
      this.InHome = true;
      this.InCustomer = true;
      this.InOrder = true;
      this.InProduct=false;
     }
}
