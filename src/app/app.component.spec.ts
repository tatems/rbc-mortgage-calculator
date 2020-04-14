import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MortgageDetailsModule } from './mortgage-details/mortgage-details.module';
import { MortgageCalculatorModule } from './mortgage-calculator/mortgage-calculator.module';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { mockMortgageDetails } from './mortgage-calculator/mortgage-calculator.mock';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MortgageDetailsModule,
        MortgageCalculatorModule
      ],
      providers: [
        CurrencyPipe,
        DecimalPipe
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create the app', () => expect(component).toBeTruthy());

  it('should add a mortgage detail to the details list and adds uuid', () => {
    const details = mockMortgageDetails();
    component.addMortgage(details);
    const uuid = component.mortgageDetails[0].uuid;

    expect(component.mortgageDetails.length).toEqual(1);
    expect(uuid).toBeDefined();
    expect(component.mortgageDetails[0]).toEqual({...details, uuid});
  });
  
  it('should remove a mortgage detail from the details list', () => {
    component.mortgageDetails = [mockMortgageDetails(({uuid: '1'}))];
    expect(component.mortgageDetails.length).toEqual(1);

    component.deleteMortgage('1');
    expect(component.mortgageDetails.length).toEqual(0);
  });
});
