export class StatsCalculator {
  static run(sequence: (number | undefined)[]) {
    if (sequence.length === 0) {
      throw new Error('Cannot calculate stats for empty array');
    }

    const minValue = sequence.reduce((prevValue, currentValue) =>
      currentValue < prevValue ? currentValue : prevValue
    );

    const maxValue = sequence.reduce((prevValue, currentValue) =>
      currentValue > prevValue ? currentValue : prevValue
    );

    return { min: minValue, max: maxValue };
  }
}
