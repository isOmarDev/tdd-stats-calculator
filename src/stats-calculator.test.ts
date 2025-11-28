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

  describe('Largest value in the sequence', () => {
    it('returns an object with "53" as the largest value in the sequence', () => {
      const result = StatsCalculator.run([2, 4, 21, -8, 53, 40]);
      expect(result.max).toBe(53);
    });

    it('returns an object with "-8" as the smallest value in the sequence with empty values', () => {
      const result = StatsCalculator.run([, , -8, ,]);
      expect(result.max).toBe(-8);
    });

    it('throws "Cannot calculate stats for empty array" error when sequence is empty', () => {
      expect(() => StatsCalculator.run([])).toThrow(
        'Cannot calculate stats for empty array'
      );
    });
  });

  describe('total number of element in the sequence', () => {
    it('returns an object with "6" as the total count of a sequence', () => {
      const result = StatsCalculator.run([2, 4, 21, -8, 53, 40]);
      expect(result.count).toBe(6);
    });

    it('returns an object with "5" as the total count of a sequence that contains empty values', () => {
      const result = StatsCalculator.run([2, 4, , , , -8, 53, 40]);
      expect(result.count).toBe(5);
    });

    it('returns an object with "5" as the total count of a sequence that contains "undefined" values', () => {
      const result = StatsCalculator.run([
        2,
        4,
        undefined,
        undefined,
        undefined,
        -8,
        53,
        40,
      ]);
      expect(result.count).toBe(5);
    });

    it('returns an object with "4" as the total count of a sequence that contains "undefined" and empty values', () => {
      const result = StatsCalculator.run([2, 4, undefined, , 53, 40]);
      expect(result.count).toBe(4);
    });

    it('throws "Cannot calculate stats for empty array" error when sequence is empty', () => {
      expect(() => StatsCalculator.run([])).toThrow(
        'Cannot calculate stats for empty array'
      );
    });
  });
});
