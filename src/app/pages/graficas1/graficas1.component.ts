import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

    // Doughnut
    public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string = 'doughnut';

    graficos: any = {
      'grafico1': {
        'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
        'data':  [24, 30, 46],
        'type': 'doughnut',
        'leyenda': 'El pan se come con'
      },
      'grafico2': {
        'labels': ['Hombres', 'Mujeres'],
        'data':  [4000, 6500],
        'type': 'doughnut',
        'leyenda': 'Entrevistados'
      },
      'grafico3': {
        'labels': ['Si', 'No'],
        'data':  [95, 5],
        'type': 'doughnut',
        'leyenda': '¿Le gustan los chilaquiles?'
      },
      'grafico4': {
        'labels': ['No', 'Si'],
        'data':  [85, 15],
        'type': 'doughnut',
        'leyenda': '¿Eres mayor de edad?'
      },
    };

  constructor() { }

  ngOnInit() {
  }

}
