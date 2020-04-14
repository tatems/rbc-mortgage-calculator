import { NgModule } from "@angular/core";
import { MortgageCalculatorComponent } from './mortgage-calculator.component';

@NgModule({
  declarations: [
    MortgageCalculatorComponent
  ],
  exports: [
    MortgageCalculatorComponent
  ]
})
export class MortgageCalculatorModule {}