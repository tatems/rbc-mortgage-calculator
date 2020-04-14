import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, Inject } from "@angular/core";
import { MortgageDetails } from '../mortgage-calculator/mortgage-calculator';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import * as pluralize from 'pluralize';

interface MortgageBreakdownItem {
  label: string;
  value: string | number;
}

@Component({
  selector: 'app-mortgage-details',
  templateUrl: './mortgage-details.component.html',
  styleUrls: ['./mortgage-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CurrencyPipe,
    DecimalPipe
  ]
})
export class MortgageDetailsComponent implements OnChanges {
  @Input() mortgageDetails: MortgageDetails;

  mortgageBreakdown: MortgageBreakdownItem[];

  constructor(private _currencyPipe: CurrencyPipe, private _decimalPipe: DecimalPipe) {}

  ngOnChanges({mortgageDetails}: SimpleChanges): void {
    if (mortgageDetails) {
      this._buildMortgageBreakdown();
    }
  }

  private _buildMortgageBreakdown(): void {
    this.mortgageBreakdown = [
      {label: 'Property Cost', value: this._currencyPipe.transform(this.mortgageDetails.propertyCost)},
      {label: 'Down Payment', value: this._currencyPipe.transform(this.mortgageDetails.downPayment)},
      {label: 'Principal', value: this._currencyPipe.transform(this.mortgageDetails.principal)},
      {label: 'APR', value: `${this._decimalPipe.transform(this.mortgageDetails.apr, '1.2')}%`},
      {label: 'Amortization', value: this._amortization()},
      {label: 'Number of Payments', value: this.mortgageDetails.numberOfPayments},
      {label: 'Payment Amount', value: this._currencyPipe.transform(this.mortgageDetails.paymentAmount)},
      {label: 'Payment Frequency', value: this.mortgageDetails.periodType},
      {label: 'Total Cost', value: this._currencyPipe.transform(this.mortgageDetails.total)},
      {label: 'Cost of Borrowing', value: this._currencyPipe.transform(this.mortgageDetails.costOfBorrowing)},
    ]
  }

  private _amortization(): string {
    const years = pluralize('year', this.mortgageDetails.years, true);

    return this.mortgageDetails.months ? `${years} ${pluralize('month', this.mortgageDetails.months, true)}` : years;
  }
}