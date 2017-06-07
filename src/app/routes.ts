import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { BoxesComponent } from './boxes/boxes.component';
import { PreAlertsComponent } from './pre-alerts/pre-alerts.component';
import { AuthorizedUsersComponent } from './authorized-users/authorized-users.component';
import { PackagesComponent } from './packages/packages.component';
import { AccountComponent } from './account/account.component';

import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [

    { path: 'home', component: HomeComponent },

    { path: 'home', component: HomeComponent },
    { path: 'account', component: AccountComponent },
    { path: 'boxes', component: BoxesComponent },
    { path: 'preAlerts', component: PreAlertsComponent },
    { path: 'authorizedUsers', component: AuthorizedUsersComponent },
    { path: 'packages', component: PackagesComponent },


    { path: '404', component: Error404Component },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: Error404Component },


]