import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  // Viewchild nos ayuda enormemente cuando
  // tenemos mas de un elemento del mismo tipo
  // no tendriamos que estarnos peleano con los (id) de js tradicional
  // sino que lo definimos como (inputP) en este caso y de esa forma
  // Estaremos apuntando al elemento input que estemos alterando en ese momento.
  @ViewChild('inputPorcentaje') inputP: ElementRef;
  @Input() legend: string = 'leyenda';
  @Input() porcentaje: number = 70;

@Output() cambioProgressBar: EventEmitter<number> = new EventEmitter();
  constructor() {
    // console.log('Leyenda: ', this.legend);
   console.log('Progreso: ', this.porcentaje);
   }

   onChanges(newValue: number) {
    // let cajaValue: any = document.getElementById('inputPorcentaje');
     newValue >= 100 ? this.porcentaje = 100 : newValue <= 0 ? this.porcentaje = 0 : this.porcentaje = newValue;
      this.inputP.nativeElement.value = this.porcentaje;
     this.cambioProgressBar.emit(this.porcentaje);
   }

  ngOnInit() {
   console.log('Progreso: ', this.porcentaje);
  }
  changeValue(valor: number) {
    if (this.porcentaje >= 100) {
      if (valor === -5) {
        // this.porcentaje = 100;
        this.porcentaje += valor;
        this.cambioProgressBar.emit(this.porcentaje);
      } else {
        return;
      }
    } else if (this.porcentaje <= 0 ) {
      if (valor === 5) {
        this.porcentaje += valor;
        this.cambioProgressBar.emit(this.porcentaje);
      } else {
        return;
      }
    } else {
      this.porcentaje += valor;
      this.cambioProgressBar.emit(this.porcentaje);
      this.inputP.nativeElement.focus();
    }
  }
}
