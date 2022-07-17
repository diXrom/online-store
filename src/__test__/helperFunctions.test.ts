import { compareType, getAmount } from '../util/helperFunctions';

describe('Test helperFunctions', () => {
  it('Test getAmount function', () => {
    expect(getAmount([{ number: 1 }, { number: 2 }, { number: 3 }], 'number')).toEqual(6);
  });
  it('Test compareType function', () => {
    expect(compareType(5, 6, true)).toEqual(-1);
  });
});