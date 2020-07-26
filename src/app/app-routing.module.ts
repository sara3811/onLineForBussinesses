import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EnteranceComponent} from './enterance/enterance.component'
import {LoginComponent} from './login/login.component'
import {CashierLoginComponent} from './cashier-login/cashier-login.component'
import {BusinessRegisterComponent} from './business-register/business-register.component'

const routes: Routes = [
  {path:'enterance',component:EnteranceComponent},
  {path:'managerLogin',component:LoginComponent},
  {path:'cashierLogin',component:CashierLoginComponent},
  {path:'register',component:BusinessRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
