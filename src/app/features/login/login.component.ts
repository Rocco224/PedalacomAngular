import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../shared/modelsData/UserModel/User';
import { AuthenticationService } from '../../auth-service.service';
import * as CryptoJS from 'crypto-js';
import {RouterModule} from '@angular/router'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthenticationService]
})
export class LoginComponent{
  _user: User = new User('', '');
  _path: string = "http://localhost:5150/api/Login";
  _isAuth: boolean;

  constructor(private authService: AuthenticationService, private router: Router) {
    this._isAuth = authService._isAuth;
  }

  Login() {
    if(!this._user.email || !this._user.email)
      return

    if(localStorage.getItem("Token"))
      return

    this.authService.GetSalt(`${this._path}/GetSalt/${this._user.email}`).subscribe({
      next: (data: any) => {
        this._user.password = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(this._user.password, data.salt));

        this.authService.CreateLogin(`${this._path}/Jwt`, this._user).subscribe({
          next: (data: any) => {
            localStorage.setItem('Token', data.body.token);
            console.log("login effettuato");           
            this._user = new User('', '');
            this.router.navigate(['/']);
          },
          error: (err: any) => {
            localStorage.clear();
            console.log(err);
            console.log("login fallito");          
            this._user = new User('', '');
          }
        })
      },
      error: (err: any) => {
        console.log(err);
        alert("login fallito");
      },
    })
  }

  Logout() {
    localStorage.clear()     
    this.router.navigate(['/']);
  }
}
