import { calculatePayment, PeriodType, calculateMortgageDetails } from './mortgage-calculator';

describe('mortgage calculator', () => {
  describe('calculatePayment', () => {
    it('returns the principal by the number of payments if the apr is 0%', () => {
      expect(calculatePayment(100, 10, 0, PeriodType.Weekly)).toEqual(10);
    });

    it('calculates various mortgage payments', () => {
      expect(calculatePayment(100000, 100, 0.03, PeriodType.Weekly)).toBeCloseTo(1029.41, 0.009);
      expect(calculatePayment(140000, 100, 0.05, PeriodType.Monthly)).toBeCloseTo(1714.73, 0.009);
      expect(calculatePayment(400000, 300, 0.01, PeriodType.SemiMonthly)).toBeCloseTo(1418.67, 0.009);
      expect(calculatePayment(1200000, 600, 0.024, PeriodType.BiWeekly)).toBeCloseTo(2605.61, 0.009);
    });
  });

  describe('calculateMortgageDetails', () => {
    it('builds mortgage details', () => {
      expect(calculateMortgageDetails(20000000, 2000000, 5, 4, 0.02, PeriodType.Monthly)).toEqual({
        propertyCost: 200000,
        principal: 180000,
        downPayment: 20000,
        paymentAmount: 2967.5,
        total: 189920.45,
        costOfBorrowing: 9920.45,
        apr: 2,
        numberOfPayments: 64,
        years: 5,
        months: 4,
        periodType: PeriodType.Monthly
      });
    });
  });
});
