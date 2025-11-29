import { StatsCalculator } from './stats-calculator';

const testCases = [
  {
    sequence: [2, 4, 21, -8, 53, 40],
    min: -8,
    max: 53,
    avg: 18.666666666667,
    count: 6,
  },
  {
    sequence: [10, -5, 32, 0, 17, -12, 22],
    min: -12,
    max: 32,
    avg: 9.142857142857142,
    count: 7,
  },
  {
    sequence: [3, 8, 15, 21, 42, 7, 34, 4, 39],
    min: 3,
    max: 42,
    avg: 19.22222222222222,
    count: 9,
  },
  {
    sequence: [-3, -8, -15, -21, -42, -7, -34, -4, -39],
    min: -42,
    max: -3,
    avg: -19.22222222222222,
    count: 9,
  },
  {
    sequence: [3, 8, , , 42, 7, 34, 4, 39],
    min: 3,
    max: 42,
    avg: 19.571428571428573,
    count: 7,
  },
  {
    sequence: [5, undefined, undefined, 20, 7, 34, 4, 39],
    min: 4,
    max: 39,
    avg: 18.166666666666668,
    count: 6,
  },
  {
    sequence: [-1, 8, undefined, , 80, 7, 34, 4, 39, 20, 65, 79],
    min: -1,
    max: 80,
    avg: 33.5,
    count: 10,
  },
];

describe('Stats calculator', () => {
  describe('The minimum value in a sequence', () => {
    it.each(testCases)(
      'returns "$min" for sequence "$sequence"',
      ({ sequence, min }) => {
        const result = StatsCalculator.run(sequence);
        expect(result.min).toBe(min);
      }
    );
  });

  describe('The maximum value in a sequence', () => {
    it.each(testCases)(
      'returns "$max" for sequence "$sequence"',
      ({ sequence, max }) => {
        const result = StatsCalculator.run(sequence);
        expect(result.max).toBe(max);
      }
    );
  });

  describe('The total number of element in a sequence', () => {
    it.each(testCases)(
      'returns "$count" for sequence "$sequence"',
      ({ sequence, count }) => {
        const result = StatsCalculator.run(sequence);
        expect(result.count).toBe(count);
      }
    );
  });

  describe('The average of all values in a sequence', () => {
    it.each(testCases)(
      'returns "$avg" for sequence "$sequence"',
      ({ sequence, avg }) => {
        const result = StatsCalculator.run(sequence);
        expect(result.avg).toBeCloseTo(avg);
      }
    );
  });

  describe('The sequence is empty', () => {
    const testCasesWithEmptySequence = [
      {
        sequence: [, , ,],
        errorMsg: 'Cannot calculate stats for empty array',
      },
      {
        sequence: [undefined, undefined, undefined],
        errorMsg: 'Cannot calculate stats for empty array',
      },
      {
        sequence: [undefined, , , undefined],
        errorMsg: 'Cannot calculate stats for empty array',
      },
    ];

    it.each(testCasesWithEmptySequence)(
      'throws "$errorMsg" error for sequence "$sequence"',
      ({ sequence, errorMsg }) => {
        expect(() => StatsCalculator.run(sequence)).toThrow(errorMsg);
      }
    );
  });
});
