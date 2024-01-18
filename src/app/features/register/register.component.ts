import { Component, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../auth-service.service';
import { Customer } from '../../shared/modelsData/CustomerModel/Customer';
import * as CryptoJS from 'crypto-js';
import {RouterModule} from '@angular/router'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [AuthenticationService]
})
export class RegisterComponent implements OnChanges {
  _customer: Customer = new Customer;
  _path: string = "http://localhost:5150/Register";
  _password: string = '';
  _confirmPassword: string = '';
  _invalidPasswordMsg: string = '';

  constructor(private authService: AuthenticationService) { }

  Register() {
    if (this._password !== this._confirmPassword){
      this._invalidPasswordMsg = "La password non combacia"
      return console.log("Le password non combaciano")
    }

    if (!this._customer.FirstName || !this._customer.LastName || !this._password || !this._confirmPassword)
      return console.log("Compila tutti i campi")

    this._customer.PasswordSalt = this.generateSalt();
    this._customer.PasswordHash = this.hashWithSalt(this._password, this._customer.PasswordSalt);

    this.authService.CreateRegister(this._path, this._customer).subscribe({
      next: (data: any) => {
        if (data.status == 200) {
          console.log("Registrazione effettuata");
        }
      },
      error: (err: any) => {
        console.log(err);
        console.log("Registrazione fallita");
      },
    })
  }

  generateSalt(): string {
    const saltLength = 16;
    const randomBytes = CryptoJS.lib.WordArray.random(saltLength);
    return CryptoJS.enc.Base64.stringify(randomBytes);
  }

  hashWithSalt(password: string, salt: string): string {
    const hashedPassword = CryptoJS.HmacSHA256(password, salt);
    return CryptoJS.enc.Base64.stringify(hashedPassword);
  }

  ngOnChanges() {
    this._invalidPasswordMsg = "";
  }
}
