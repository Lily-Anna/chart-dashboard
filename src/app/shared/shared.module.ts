import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DataFormatPipe } from './data-format.pipe';



@NgModule({
  declarations: [
    DatePickerComponent,
    DataFormatPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
