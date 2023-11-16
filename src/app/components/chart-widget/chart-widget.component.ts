import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.css'],
})
export class ChartWidgetComponent implements OnInit {

  chartOptions: Highcharts.Options | undefined;

  ngOnInit(): void {
    // Определите настройки графика
    this.chartOptions = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Продажи'
      },
      xAxis: {
        categories: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн']
      },
      yAxis: {
        title: {
          text: 'Количество'
        }
      },
      series: [{
        name: 'Продажи',
        data: [100, 200, 150, 300, 250, 400]
      }]as Array<Highcharts.SeriesOptionsType>
    };
  }
}