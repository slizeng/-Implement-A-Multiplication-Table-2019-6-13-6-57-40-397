import { createMultiplyTable } from "../index"

describe('practice-1-1', () => {
  it('should return null when create multiply table given input integer 2 and 1', () => {
    expect(createMultiplyTable(2, 1)).toBe(null);
  });

  it('should return null when create multiply table given input integer 1 and 1', () => {
    expect(createMultiplyTable(1, 1)).toBe(null);
  });

  it('should return null when create multiply table given input integer 0 and 1', () => {
    expect(createMultiplyTable(0, 1)).toBe(null);
  });

  it('should return null when create multiply table given input integer 1000 and 1001', () => {
    expect(createMultiplyTable(1000, 1001)).toBe(null);
  });

  it('should return multiply table when create multiply table given input integer 1 and 2', () => {
    expect(createMultiplyTable(1, 2)).toBe(
      "1*1=1\n" +
      "1*2=2  2*2=4"
    );
  });

  it('should return multiply table when create multiply table given input integer 2 and 4', () => {
    expect(createMultiplyTable(2, 4)).toBe(
      "2*2=4\n" +
      "2*3=6  3*3=9\n" +
      "2*4=8  3*4=12  4*4=16"
    );
  });

  it('should return multiply table when create multiply table given input integer 999 and 1000', () => {
    expect(createMultiplyTable(999, 1000)).toBe(
      "999*999=998001\n" +
      "999*1000=999000  1000*1000=1000000"
    );
  });
});