import { StatsCalculator } from './stats-calculator';

describe('Stats calculator', () => {
  describe('Smallest value in the sequence', () => {
    it('returns an object with "-8" as the smallest value in the sequence', () => {
      const result = StatsCalculator.run([2, 4, 21, -8, 53, 40]);
      expect(result.min).toBe(-8);
    });

    it('returns an object with "-8" as the smallest value in the sequence with empty values', () => {
      const result = StatsCalculator.run([, , -8, ,]);
      expect(result.min).toBe(-8);
    });

    it('throws "Cannot calculate stats for empty array" error when sequence is empty', () => {
      expect(() => StatsCalculator.run([])).toThrow(
        'Cannot calculate stats for empty array'
      );
    });
  });
});
