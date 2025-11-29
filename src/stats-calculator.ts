export class StatsCalculator {
  static run(sequence: (number | undefined)[]) {
    let min: number | undefined = undefined;
    let max: number | undefined = undefined;
    let sum = 0;
    let count = 0;
    let avg = 0;

    for (const value of sequence) {
      if (value === undefined) continue;

      if (min === undefined || value < min) min = value;
      if (max === undefined || value > max) max = value;

      sum += value;
      count++;
      avg = sum / count;
    }

    if (count === 0) {
      throw new Error('Cannot calculate stats for empty array');
    }

    return {
      min,
      max,
      count,
      avg,
    };
  }
}

console.log(137 / 7);
