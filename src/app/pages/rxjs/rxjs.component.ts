import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter, first } from 'rxjs/operators';



@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent implements OnInit, OnDestroy {
  private  subscription: Subscription;
  constructor() {
  this.subscription = this.regresaObservable()
    .subscribe(
      numero => console.log('valor emitido', numero),
      error => console.error ('Error en el obs', error),
      () => console.log('El observador termino')
      );
   }
   ngOnInit() {
  }
  ngOnDestroy() {
    console.log('Aqui ejecuto on destroy y unsusbcribe');
    this.subscription.unsubscribe();
  }

  regresaObservable (): Observable<any> {
    return  new Observable( (observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval (() => {
        contador += 1;
        let salida = {
          valor: contador,
          second: 1
        };
        /*let json = JSON.stringify(salida);
        console.log('json', json);
        console.log('parse', JSON.parse(json));*/
        observer.next(salida);

        if (contador === 6) {
          clearInterval(intervalo);
          observer.complete();
        }
        // if (contador === 2) {
         //  clearInterval(intervalo);
        //  observer.error('Auxilio');
       // }
      }, 1000);
    }).pipe(
      /*first((response, idx, obs) => {
        console.log('first', response, idx, obs );
        return true;
      }),*/
      map( response =>  response.valor),
      filter( (valor, index) => {
        if (valor % 2 !== 0) {
          console.log('En filter', index);
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
