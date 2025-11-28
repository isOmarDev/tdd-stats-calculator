export class StatsCalculator {
  static run(sequence: (number | undefined)[]) {
    const minValue = sequence.reduce((prevValue, currentValue) =>
      currentValue < prevValue ? currentValue : prevValue
    );

    return { min: minValue };
  }
}
