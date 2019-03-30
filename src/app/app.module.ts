import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AboutmeComponent } from './aboutme/aboutme.component';
import { NameComponent } from './name/name.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { AlertsComponent } from './alerts/alerts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { StatcardComponent } from './statcard/statcard.component';
import { UserTableComponent } from './user-table/user-table.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { UserviewComponent } from './userview/userview.component';
import { ImagesComponent } from './images/images.component';
import { FormsComponent } from './forms/forms.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductServiceService } from './product-service.service';
import { UserService } from './user.service';
@NgModule({
  declarations: [
    AppComponent,

    AboutmeComponent,
    NameComponent,
    CardComponent,
    LoginComponent,
    AlertsComponent,
    DashboardComponent,
    HeaderComponent,
    StatcardComponent,
    UserTableComponent,
    AnalyticsComponent,
    UsersComponent,
    ProductsComponent,
    LogisticsComponent,
    UserviewComponent,
    ImagesComponent,
    FormsComponent,
    AddproductComponent,
    SidenavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductServiceService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
