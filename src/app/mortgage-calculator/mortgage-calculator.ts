export enum PeriodType {
  Monthly = 'Monthly',
  SemiMonthly = 'Semi-Monthly',
  BiWeekly = 'Bi-Weekly',
  Weekly = 'Weekly'
}

export const PaymentPeriodsPerYear = new Map<PeriodType, number>([
  [PeriodType.Monthly, 12],
  [PeriodType.SemiMonthly, 24],
  [PeriodType.BiWeekly, 26],
  [PeriodType.Weekly, 52]
]);

/**
 * Describes a mortgage payment plan
 *
 * @param numberOfPayments - Total number of payments over the life of the loan
 * @param paymentAmount - The amount owed each period (in dollars eg 100.10)
 * @param propertyCost - The initial cost of the property
 * @param downPayment - The initial down payment
 * @param principal - The total amount borrowed (in dollars eg 100.10)
 * @param costOfBorrowing - Amount of interested paid over the life of the loan (in dollars eg 100.10)
 * @param total - Total amount to pay off the loan (in dollars eg 100.10)
 * @param apr - Annual interest rate for loan
 * @param periodType - Payment period that describes frequency of payment
 * @param years - Number of years
 * @param months - Number of months (additive to number of years)
 */
export interface MortgageDetails {
  uuid?: string;
  numberOfPayments: number;
  paymentAmount: number;
  propertyCost: number;
  downPayment: number;
  principal: number;
  costOfBorrowing: number;
  total: number;
  apr: number;
  periodType: PeriodType;
  years: number;
  months: number;
}

/**
 * Calculates mortgage payment, total, and cost of borrowing
 *
 * @param propertyCost - Total amount to purchase property (in cents)
 * @param downPayment - Down payment amount (in cents)
 * @param years - Number of years
 * @param months - Number of months (additive to number of years)
 * @param periodType - Payment period that describes frequency of payment
 * @param apr - Interest rate as a decimal (2% would be passed as 0.02)
 *
 * @returns A MortgageDetails object
 */
export function calculateMortgageDetails(
  propertyCost: number,
  downPayment: number,
  years: number,
  months: number,
  apr: number,
  periodType: PeriodType
): MortgageDetails {
  const principal = propertyCost - downPayment;
  const numberOfPayments = numberOfPaymentPeriods(years, months, periodType);
  const paymentAmount = calculatePayment(principal, numberOfPayments, apr, periodType);
  const total = paymentAmount * numberOfPayments;
  const costOfBorrowing = total - principal;

  return {
    numberOfPayments,
    propertyCost: propertyCost / 100,
    downPayment: downPayment / 100,
    principal: principal / 100,
    costOfBorrowing: Math.floor(costOfBorrowing) / 100,
    total: Math.floor(total) / 100,
    paymentAmount: Math.floor(paymentAmount) / 100,
    apr: apr * 100,
    years,
    months,
    periodType
  };
}

export function numberOfPaymentPeriods(years: number, months: number, periodType: PeriodType): number {
  return Math.floor((years + months / 12) * PaymentPeriodsPerYear.get(periodType));
}

export function calculatePayment(
  principal: number,
  numberOfPayments: number,
  apr: number,
  periodType: PeriodType
): number {
  if (apr === 0) {
    return principal / numberOfPayments;
  }

  const interestRatePerPeriod = apr / PaymentPeriodsPerYear.get(periodType);
  const x = Math.pow(1 + interestRatePerPeriod, numberOfPayments);

  return (principal * x * interestRatePerPeriod) / (x - 1);
}

export function dollarsToCents(amount: number): number {
  return Math.floor(amount * 100);
}
