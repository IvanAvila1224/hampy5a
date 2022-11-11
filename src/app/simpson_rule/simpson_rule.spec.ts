import { simpsonr } from './simpson_rule';

describe('simpson unit testing', () => {
  it('sould return p=16 if f(x)=2x, x0=0, x1=4, num_seg=4, dof=0', () => {
    const p = simpsonr(
      0,
      4,
      4,
      (x: number) => {
        return 2 * x;
      },
      0.00001
    );
    expect(p).toBe(16);
  });
  it('should return p=0.33333 if f(x)= x*x, x0=0, x1=1, num_seg=4, dof=0', () => {
    const p = simpsonr(
      0,
      1,
      4,
      (x: number) => {
        return x * x;
      },
      0.000001
    );
    expect(p).toBeCloseTo(0.33333, 5);
  });
  it('should return p=1.386 if f(x)= 1/x, x0=1, x1=4, num_seg=6, dof=0', () => {
    const p = simpsonr(
      1,
      4,
      6,
      (x: number) => {
        return 1 / x;
      },
      0.0001
    );
    expect(p).toBeCloseTo(1.386, 3);
  });
});
