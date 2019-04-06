import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contar3Segundos().then(
      respuesta => console.log('Termino la espera! y devuelve', respuesta)
    )
    .catch (error => console.error('Error en la promesa', error));
   }

  ngOnInit() {
  }
  contar3Segundos(): Promise <boolean> {
    return new Promise( (resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador++;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }
}
