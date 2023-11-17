import { Directive, ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';
import { Chart, registerables, ChartType, ChartConfiguration } from 'chart.js';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appDashboardWidget]',
})
export class DashboardWidgetDirective implements OnInit {
  @Input() nameChart: string = 'example';
  @Input() data: number[] = [];
  @Input() chartType: ChartType = 'bar'; // По умолчанию тип диаграммы - 'bar'

  private destroy$ = new Subject<void>();

  constructor(private elementRef: ElementRef) {
    Chart.register(...registerables);
  }

  ngOnInit() {

    this.updateChart();

    // Подписка на изменение типа графика
    this.chartType$
      .pipe(takeUntil(this.destroy$))
      .subscribe((chartType) => {
        this.chartType = chartType;
        this.updateChart();
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private get chartType$(): Subject<ChartType> {
    // Получение потока для изменения типа графика
    const chartType$ = new Subject<ChartType>();

    // Обработка изменения типа графика
    chartType$
      .pipe(takeUntil(this.destroy$))
      .subscribe((chartType) => {
        this.chartType = chartType;
        this.updateChart();
      });

    return chartType$;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['nameChart'] || changes['data'] || changes['chartType']) {
      this.updateChart();
    }
  }
  private updateChart() {
    const canvas = this.elementRef.nativeElement;
    const ctx = canvas.getContext('2d');

    const chart = new Chart(ctx, this.getChartConfiguration());
    chart.update();
  }

  private getChartConfiguration(): ChartConfiguration {
    return {
      type: this.chartType,
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: this.nameChart,
            data: this.data,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  }
}