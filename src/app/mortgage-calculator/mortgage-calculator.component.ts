import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MortgageDetails, calculateMortgageDetails, PeriodType, dollarsToCents } from './mortgage-calculator';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.scss']
})
export class MortgageCalculatorComponent {
  mortgageForm: FormGroup;
  mortgageDetails?: MortgageDetails;

  selectablePeriods: PeriodType[] = Object.values(PeriodType);

  constructor(private _fb: FormBuilder) {
    this.mortgageForm = this._fb.group({
      totalCost: this._fb.control(100000, [Validators.required, Validators.min(1)]),
      downPayment: this._fb.control(0, [Validators.min(0)]),
      years: this._fb.control(25, [Validators.min(1)]),
      months: this._fb.control(0, [Validators.min(0)]),
      apr: this._fb.control(3.25, [Validators.min(0)]),
      periodType: this._fb.control(PeriodType.Monthly, [Validators.required])
    });
  }

  calculate(): void {
    if (this.mortgageForm.invalid) {
      return;
    }

    const {totalCost, downPayment, years, months, apr, periodType} = this.mortgageForm.value;

    this.mortgageDetails = calculateMortgageDetails(dollarsToCents(totalCost), dollarsToCents(downPayment), years, months, apr / 100, periodType);
  }
}