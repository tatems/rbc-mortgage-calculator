export enum PeriodType {
  Monthly,
  SemiMonthly,
  BiWeekly,
  Weekly
}

export const PaymentPeriodsPerYear = new Map<PeriodType, number>([
  [PeriodType.Monthly, 12],
  [PeriodType.SemiMonthly, 24],
  [PeriodType.BiWeekly, 26],
  [PeriodType.Weekly, 52]
]);

export interface MortgageDetails {
  numberOfPayments: number;
  paymentAmount: number;
  principal: number;
  costOfBorrowing: number;
  total: number;
}

//  [$100,000(1 + .00583)^360 x .00583] / [(1 + .00583)^360 - 1] 
export function calculateMortgageDetails(totalCost: number, downPayment: number, years: number, months: number, periodType: PeriodType, apr: number): MortgageDetails {
  const principal = totalCost - downPayment;
  const numberOfPayments = numberOfPaymentPeriods(years, months, periodType);
  const paymentAmount = calculatePayment(principal, numberOfPayments, apr, periodType);
  const total = paymentAmount * numberOfPayments;
  const costOfBorrowing = total - principal;

  return {
    numberOfPayments,
    principal,
    costOfBorrowing,
    total,
    paymentAmount
  }
}

export function numberOfPaymentPeriods(years: number, months: number, periodType: PeriodType): number {
  return Math.floor((years + (months / 12)) * PaymentPeriodsPerYear.get(periodType));
}

export function calculatePayment(principal: number, numberOfPayments: number, apr: number, periodType: PeriodType): number {
  const interestRatePerPeriod = apr / PaymentPeriodsPerYear.get(periodType);
  const x = Math.pow(1 + interestRatePerPeriod, numberOfPayments);
  
  return (principal * x * interestRatePerPeriod) / (x - 1);
}