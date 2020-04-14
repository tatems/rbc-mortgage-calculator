import { Component } from '@angular/core';
import { calculateMortgageDetails, PeriodType } from './mortgage-calculator/mortgage-calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rbc-mortgage-calculator';

  constructor() {
    console.log(calculateMortgageDetails(300000, 60000, 25, 0, PeriodType.Monthly, .02))
  }
}
