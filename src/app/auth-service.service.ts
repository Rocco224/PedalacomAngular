import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './shared/modelsData/UserModel/User'
import { SharedService } from './shared.service';
import { Customer } from './shared/modelsData/CustomerModel/Customer';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private sharedService: SharedService) {}

  GetSalt(path: string) {
    return this.sharedService.ReadDataById(path);
  }

  CreateLogin(path: string, user: User) {
    return this.sharedService.CreateData(path, user);
  }

  CreateRegister(path: string, customer: Customer) {
    return this.sharedService.CreateData(path, customer)
  }

  Logout() {
    localStorage.clear()
    console.log("Logout effettuato");
  }
}