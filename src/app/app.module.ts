import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InputTextModule, ButtonModule } from 'primeng/primeng';



import { RouterModule } from '@angular/router'

import { Error404Component } from './errors/404.component'


import { NavComponent } from './nav/nav.component';

import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BoxesComponent } from './boxes/boxes.component';
import { PreAlertsComponent } from './pre-alerts/pre-alerts.component';
import { AuthorizedUsersComponent } from './authorized-users/authorized-users.component';
import { PackagesComponent } from './packages/packages.component';
import { AccountComponent } from './account/account.component';

import { DataService } from './data.service';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoxesComponent,
    PreAlertsComponent,
    AuthorizedUsersComponent,
    PackagesComponent,
    AccountComponent,
    Error404Component,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    ButtonModule,

    RouterModule.forRoot(appRoutes),



  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
