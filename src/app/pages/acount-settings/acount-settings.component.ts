import { Component, OnInit, ElementRef } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styleUrls: ['./acount-settings.component.css']
})
export class AcountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }
  changeTheme(theme: string, link: ElementRef) {
    // Funcion para aplicar el tema
   this._ajustes.aplicarTema(theme);
   this.colocarCheck();
  }
  colocarCheck () {
    // Primero verificamos si alguno tiene la calse working y la quitamos
    let eliminar = document.getElementsByClassName('working');
    if (eliminar && eliminar.length > 0) {
      eliminar[0].classList.remove('working');
    }
    // Al estar sin esa clase ahora se la podemos aplicar al tema actual
    let tema = this._ajustes.ajustes.tema;
    let selectores = document.getElementsByClassName('selector');
    for (let ref of selectores as any) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
