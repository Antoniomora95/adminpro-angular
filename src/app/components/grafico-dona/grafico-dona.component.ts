import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {
  @Input() dataDonut: any = {};

  private doughnutChartLabels: string[] = [];
  private doughnutChartData: number[] = [];
  private doughnutChartType: string;
  private title: string;

  constructor() {
   }

  ngOnInit() {
    console.log(typeof  this.dataDonut);
    this.doughnutChartLabels = this.dataDonut.labels;
    this.doughnutChartData = this.dataDonut.data;
    this.doughnutChartType = this.dataDonut.type;
    this.title = this.dataDonut.leyenda;
  }

}
