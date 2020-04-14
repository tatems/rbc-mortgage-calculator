import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MortgageDetailsComponent } from './mortgage-details.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppFormModule } from '../form/form.module';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { mockMortgageDetails } from '../mortgage-calculator/mortgage-calculator.mock';
import { PeriodType } from '../mortgage-calculator/mortgage-calculator';

describe('MortgageDetailsComponent', () => {
  let component: MortgageDetailsComponent;
  let fixture: ComponentFixture<MortgageDetailsComponent>;

  const mortgageDetails = mockMortgageDetails({
    uuid: '1',
    propertyCost: 100000,
    downPayment: 0,
    principal: 100000,
    apr: 2,
    years: 25,
    months: 4,
    numberOfPayments: 100,
    paymentAmount: 100,
    periodType: PeriodType.Weekly,
    total: 120000,
    costOfBorrowing: 20000
  })

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MortgageDetailsComponent
      ],
      imports: [
        ReactiveFormsModule,
        ComponentsModule,
        AppFormModule
      ],
      providers: [
        CurrencyPipe,
        DecimalPipe
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MortgageDetailsComponent);
    component = fixture.componentInstance;

    component.mortgageDetails = mockMortgageDetails(mortgageDetails);

    fixture.detectChanges();
  }));

  it('should create the detail', () => expect(component).toBeTruthy());

  it('formats the details correctly', () => {
    expect(component.mortgageBreakdown).toEqual([
      {label: 'Property Cost', value: '$100,000.00'},
      {label: 'Down Payment', value: '$0.00'},
      {label: 'Principal', value: '$100,000.00'},
      {label: 'APR', value: '2.00%'},
      {label: 'Amortization', value: '25 years 4 months'},
      {label: 'Number of Payments', value: 100},
      {label: 'Payment Amount', value: '$100.00'},
      {label: 'Payment Frequency', value: PeriodType.Weekly},
      {label: 'Total Cost', value: '$120,000.00'},
      {label: 'Cost of Borrowing', value: '$20,000.00'},
    ])
  })

  it('formats the details correctly with no month value', () => {
    component.mortgageDetails = {...component.mortgageDetails, months: 0};
    component.ngOnInit();

    expect(component.mortgageBreakdown).toEqual([
      {label: 'Property Cost', value: '$100,000.00'},
      {label: 'Down Payment', value: '$0.00'},
      {label: 'Principal', value: '$100,000.00'},
      {label: 'APR', value: '2.00%'},
      {label: 'Amortization', value: '25 years'},
      {label: 'Number of Payments', value: 100},
      {label: 'Payment Amount', value: '$100.00'},
      {label: 'Payment Frequency', value: PeriodType.Weekly},
      {label: 'Total Cost', value: '$120,000.00'},
      {label: 'Cost of Borrowing', value: '$20,000.00'},
    ])
  })
});
