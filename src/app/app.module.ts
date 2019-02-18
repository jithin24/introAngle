import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeComponent } from './prime/prime.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { RecordsService } from './records.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component'

import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    PrimeComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    HttpClientModule, 
    RouterModule.forRoot([
      {
        path: 'admin', 
        component: AdminComponent, 
        canActivate: [AuthGuard]
      },
      {
        path: 'login', 
        component: LoginComponent
      },
      {
        path: '', 
        component: HomeComponent
      },
    ])
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
