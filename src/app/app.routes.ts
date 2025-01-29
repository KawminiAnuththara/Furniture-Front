import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CustomersComponent } from './customers/customers.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    {path:'login' ,component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'customer' ,component:CustomersComponent},
    {path:'admin',component:AdminComponent},
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'',redirectTo:'/signup',pathMatch:'full'},
];
