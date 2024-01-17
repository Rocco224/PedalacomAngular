import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ProductComponent } from './features/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './shared.service';
import { AuthenticationService } from './auth-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule,NavbarComponent,ProductComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ SharedService, AuthenticationService]
})
export class AppComponent {
  title = 'pedalacom_ng';
}
