import { MortgageDetails, PeriodType } from './mortgage-calculator';
import * as faker from 'faker';

export function mockMortgageDetails(overrides: Partial<MortgageDetails> = {}): MortgageDetails {
  return {
    numberOfPayments: faker.random.number(),
    paymentAmount: faker.random.number(),
    propertyCost: faker.random.number(),
    downPayment: faker.random.number(),
    principal: faker.random.number(),
    costOfBorrowing: faker.random.number(),
    total: faker.random.number(),
    apr: faker.random.number(),
    periodType: PeriodType.Monthly,
    years: faker.random.number(),
    months: faker.random.number(),
    ...overrides
  }
}