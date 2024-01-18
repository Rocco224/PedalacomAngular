import { Injectable } from '@angular/core';
import { User } from './shared/modelsData/UserModel/User'
import { SharedService } from './shared.service';
import { Customer } from './shared/modelsData/CustomerModel/Customer';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {
  _isAuth: boolean;
  
  constructor(private sharedService: SharedService) {
    if(localStorage.getItem("Token"))
      this._isAuth = true;
    else
      this._isAuth = false;
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
}