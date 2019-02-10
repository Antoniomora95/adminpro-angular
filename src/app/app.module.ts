import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

  /*Rutas principales
 Si nos encontramos algo que diga module o rutas
 siempre va en la parte de los imports*/
// RUTAS
import { APP_ROUTES } from './app.routes';

// MODULOS
import { PagesModule } from './pages/pages.module';

// COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
