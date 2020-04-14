import { NgModule } from "@angular/core";
import { MortgageDetailsComponent } from './mortgage-details.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MortgageDetailsComponent],
  exports: [MortgageDetailsComponent],
  imports: [CommonModule]
})
export class MortgageDetailsModule {}