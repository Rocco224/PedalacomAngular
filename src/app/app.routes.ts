import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductComponent } from './features/product/product.component';
import { SalesOrderHeaderComponent } from './features/sales-order-header/sales-order-header.component';
import { CustomerComponent } from './features/customer/customer.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'product', component: ProductComponent },
    { path: 'sales-order-header', component: SalesOrderHeaderComponent },
    {path:'customer', component: CustomerComponent},
    {path:'',redirectTo:'home',pathMatch:'full'}
];
