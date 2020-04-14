import { NgModule } from "@angular/core";
import { MortgageCalculatorComponent } from './mortgage-calculator.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MortgageCalculatorComponent
  ],
  exports: [
    MortgageCalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class MortgageCalculatorModule {}