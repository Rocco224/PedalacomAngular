import { Injectable } from '@angular/core';
import { User } from './shared/modelsData/UserModel/User'
import { SharedService } from './shared.service';
import { Customer } from './shared/modelsData/CustomerModel/Customer';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {
  private _isAuth: boolean = false;
  
  constructor(private sharedService: SharedService) {}

  getIsAuthenticated(): boolean {
    return this._isAuth;
  }

  setIsAuthenticated(bool: boolean): boolean {
    return this._isAuth = bool;
  }

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
    localStorage.clear();
    this.setIsAuthenticated(false);
    console.log("Logout effettuato");
  }
}