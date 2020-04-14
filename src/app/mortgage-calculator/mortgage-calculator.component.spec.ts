import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MortgageCalculatorComponent } from './mortgage-calculator.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppFormModule } from '../form/form.module';
import * as mortgageCalculator from './mortgage-calculator';

describe('MortgageCalculatorComponent', () => {
  let component: MortgageCalculatorComponent;
  let fixture: ComponentFixture<MortgageCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MortgageCalculatorComponent
      ],
      imports: [
        ReactiveFormsModule,
        ComponentsModule,
        AppFormModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MortgageCalculatorComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create the calculator', () => expect(component).toBeTruthy());
  
  it('should have a valid form on initialization', () => expect(component.mortgageForm.valid).toBeTruthy());
  
  it('should allow a valid form to calculate mortgage details', () => {
    const spy = spyOn(mortgageCalculator, 'calculateMortgageDetails').and.callThrough();
    component.calculate();

    expect(spy).toHaveBeenCalled();
  });
  
  it('should block calculation while form is invalid', () => {
    const spy = spyOn(mortgageCalculator, 'calculateMortgageDetails').and.callThrough();
    component.mortgageForm.patchValue({totalCost: null});
    component.calculate();

    expect(spy).not.toHaveBeenCalled();
  });
});
