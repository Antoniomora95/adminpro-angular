import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';

// ng2-charts
import { ChartsModule } from 'ng2-charts';
/*Rutas principales
Si nos encontramos algo que diga module o rutas
 siempre va en la parte de los imports
*/
// RUTAS
import { PAGES_ROUTES } from './pages.routes';

// MODULOS
import { SharedModule } from '../shared/shared.module';
// Este sera temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';




@NgModule({
  declarations: [
      PagesComponent,
      DashboardComponent,
      Graficas1Component,
      ProgressComponent,
      IncrementadorComponent,
      GraficoDonaComponent,
      AcountSettingsComponent,
      PromesasComponent,
      RxjsComponent
  ],
  imports: [
      CommonModule,
      SharedModule,
      ChartsModule,
      FormsModule,
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
