import { StatsCalculator } from './stats-calculator';

describe('Stats calculator', () => {
  describe('Smallest value in the sequence', () => {
    it('returns an object with "-8" as the smallest value in the sequence', () => {
      const result = StatsCalculator.run([2, 4, 21, -8, 53, 40]);
      expect(result.min).toBe(-8);
    });
  });
});
