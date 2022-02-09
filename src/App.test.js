import { sortByAccountType } from './components/TableWithData/utils/sotyByAccountType';
import { sortByProfit } from './components/TableWithData/utils/sortByProfit';

test('sort by name asc util', () => {
  expect(sortByAccountType({accountType: 'aaa'}, {accountType: 'bbb'}, 1)).toBe(1);
});

test('sort by name desc util', () => {
  expect(sortByAccountType({accountType: 'aaa'}, {accountType: 'bbb'}, -1)).toBe(-1);
});

test('sort by name equal util', () => {
  expect(sortByAccountType({accountType: 'aaa'}, {accountType: 'aaa'}, -1)).toBe(0);
});

test('sort by profit asc higher lower util', () => {
  expect(sortByProfit({profitLoss: 1}, {profitLoss: 0}, 1)).toBe(1);
});

test('sort by profit asc lower higher util', () => {
  expect(sortByProfit({profitLoss: 1}, {profitLoss: 0}, -1)).toBe(-1);
});

test('sort by profit desc higher lower util', () => {
  expect(sortByProfit({profitLoss: 1}, {profitLoss: 0}, -1)).toBe(-1);
});

test('sort by profit desc lower higher util', () => {
  expect(sortByProfit({profitLoss: 51}, {profitLoss: 100}, -1)).toBe(1);
});

test('sort by profit equal util', () => {
  expect(sortByProfit({profitLoss: 6}, {profitLoss: 6}, 1)).toBe(0);
});
