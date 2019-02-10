import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';

/*Rutas principales
Si nos encontramos algo que diga module o rutas
 siempre va en la parte de los imports
*/
// RUTAS
import { PAGES_ROUTES } from './pages.routes';

// MODULOS
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
      PagesComponent,
      DashboardComponent,
      Graficas1Component,
      ProgressComponent
  ],
  imports: [
      SharedModule,
      PAGES_ROUTES
  ],
  exports: [
      DashboardComponent,
      Graficas1Component,
      ProgressComponent,
      PagesComponent
  ]
})
export class PagesModule { }
