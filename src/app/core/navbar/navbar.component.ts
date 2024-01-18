import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { AuthenticationService } from '../../auth-service.service';

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

    constructor(private authService: AuthenticationService) {}

    get isAuth(): boolean {
      console.log(this.authService.getIsAuthenticated());
      return this.authService.getIsAuthenticated();
    }

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

     Logout() {
      this.authService.Logout;
     }
}
