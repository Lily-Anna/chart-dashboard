import { Component, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChartType, ChartTypeRegistry } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  chartTypes: (keyof ChartTypeRegistry)[] = ['bar', 'line', 'pie', 'radar'];
  cards: Observable<any[]>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.cards = this.getCards();
  }

  getCards(): Observable<any[]> {
    return new Observable<any[]>(observer => {
      setTimeout(() => {
        observer.next([
          { title: 'Chart 1', data: [10, 20, 30], chartType: 'bar', cols: 1, rows: 1 },
          { title: 'Chart 2', data: [40, 50, 60], chartType: 'line', cols: 1, rows: 1 },
          { title: 'Chart 3', data: [70, 80, 90], chartType: 'pie', cols: 1, rows: 1 },
          { title: 'Chart 4', data: [70, 80, 90], chartType: 'radar', cols: 1, rows: 1 }
        ]);
        observer.complete();
      }, 1000);
    });
  }

  onChartTypeChange(card: any, selectedChartType: ChartTypeRegistry) {
    card.chartType = selectedChartType;
    // Дополнительные действия при изменении типа графика, если необходимо
  }
}
