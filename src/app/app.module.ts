import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CashierLoginComponent } from './cashier-login/cashier-login.component';
import { BusinessRegisterComponent } from './business-register/business-register.component';
import { EnteranceComponent } from './enterance/enterance.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ActivityTimeComponent } from './activity-time/activity-time.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ServiceComponent } from './service/service.component';
import { CashierDeskComponent } from './cashier-desk/cashier-desk.component';
import { GetTurnComponent } from './get-turn/get-turn.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { UserComponent } from './user/user.component';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CashierLoginComponent,
    BusinessRegisterComponent,
    EnteranceComponent,
    HomeComponent,
    ActivityTimeComponent,
    ServiceComponent,
    CashierDeskComponent,
    GetTurnComponent,
    NavigatorComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    CalendarModule,
    InputTextModule,
    ButtonModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
