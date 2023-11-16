import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { BarController,ChartType, BarElement, CategoryScale, Chart, Decimation, Filler, Legend, Title, Tooltip,LinearScale, LineController, LineElement, PointElement } from 'chart.js';



@Directive({
  selector: '[appDashboardWidget]'
})
export class DashboardWidgetDirective  implements OnInit{
  @Input() chartType: ChartType = 'bar'; // По умолчанию тип диаграммы - 'bar'
  
  constructor(private elementRef: ElementRef) { 
    
    Chart.register(BarElement, BarController,LineController, PointElement,LineElement, CategoryScale, Decimation, Filler, Legend, Title, Tooltip, LinearScale);
  }
  ngOnInit () {
    const canvas = this.elementRef.nativeElement;
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type:  this.chartType,
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
  }
}
