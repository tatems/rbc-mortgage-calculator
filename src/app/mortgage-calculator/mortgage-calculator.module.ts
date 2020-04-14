import { NgModule } from '@angular/core';
import { MortgageCalculatorComponent } from './mortgage-calculator.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppFormModule } from '../form/form.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [MortgageCalculatorComponent],
  exports: [MortgageCalculatorComponent],
  imports: [CommonModule, ReactiveFormsModule, AppFormModule, ComponentsModule]
})
export class MortgageCalculatorModule {}
