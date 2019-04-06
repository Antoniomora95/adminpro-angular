import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
           {path: 'progress', component: ProgressComponent, data: {titulo: 'Progress component'}},
           {path: 'graficas1', component: Graficas1Component, data: {titulo: 'Donut Graphics'}},
           {path: 'promesas', component: PromesasComponent, data: {titulo: 'Promises'}},
           {path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'}},
           {path: 'account-settings', component: AcountSettingsComponent, data: {titulo: 'Account-settings'}},
           {path: 'rxjs', component: RxjsComponent, data: {titulo: 'Rxjs component'}},
           {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
     },
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
