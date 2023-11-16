import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartDirective } from './chart.directive';
import { ChartSettingsComponent } from './chart-settings/chart-settings.component';



@NgModule({
  declarations: [
    ChartDirective,
    ChartSettingsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChartsModule { }
