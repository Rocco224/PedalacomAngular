import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../auth-service.service';
import { Customer } from '../../shared/modelsData/CustomerModel/Customer';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [AuthenticationService]
})
export class RegisterComponent {
  _customer: Customer = new Customer;
  _path: string = "http://localhost:5150/Register";

  constructor(private authService: AuthenticationService) {}

  Register() {
    this._customer.PasswordSalt = this.generateSalt();
    this._customer.PasswordHash = this.hashWithSalt(this._customer.PasswordHash, this._customer.PasswordSalt);
    
    console.log(this._path);
    
    console.log(this._customer);
  
    this.authService.CreateRegister(this._path, this._customer).subscribe({
      next: (data: any) => {
        console.log(data);
        
        if(data.status == 200) {
          console.log("Registrazione effettuata");
        }
      },
      error: (err: any) => {
        console.log(err);
        console.log("login fallito");
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
}
