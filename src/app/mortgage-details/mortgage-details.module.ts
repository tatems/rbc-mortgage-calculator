import { NgModule } from "@angular/core";
import { MortgageDetailsComponent } from './mortgage-details.component';
import { CommonModule, DecimalPipe, CurrencyPipe } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [MortgageDetailsComponent],
  exports: [MortgageDetailsComponent],
  imports: [CommonModule, ComponentsModule],
  providers: [
    CurrencyPipe,
    DecimalPipe
  ]
})
export class MortgageDetailsModule {}