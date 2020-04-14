import { NgModule } from "@angular/core";
import { MortgageDetailsComponent } from './mortgage-details.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [MortgageDetailsComponent],
  exports: [MortgageDetailsComponent],
  imports: [CommonModule, ComponentsModule]
})
export class MortgageDetailsModule {}