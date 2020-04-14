import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MortgageCalculatorModule } from './mortgage-calculator/mortgage-calculator.module';
import { MortgageDetailsModule } from './mortgage-details/mortgage-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MortgageCalculatorModule,
    MortgageDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
