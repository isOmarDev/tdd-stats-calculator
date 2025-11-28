export class StatsCalculator {
  private static isEmpty(sequence: (number | undefined)[]) {
    return (
      sequence.every((value) => value === undefined) ||
      sequence.length === 0
    );
  }

  static run(sequence: (number | undefined)[]) {
    if (this.isEmpty(sequence)) {
      throw new Error('Cannot calculate stats for empty array');
    }

    const minValue = sequence.reduce((prevValue, currentValue) =>
      currentValue < prevValue ? currentValue : prevValue
    );

    const maxValue = sequence.reduce((prevValue, currentValue) =>
      currentValue > prevValue ? currentValue : prevValue
    );

    const totalElements = sequence.reduce(
      (prevValue: number, currentValue) =>
        currentValue !== undefined ? ++prevValue : prevValue,
      0
    );

    const avgValue =
      sequence.reduce(
        (prevValue: number, currentValue) =>
          currentValue === undefined
            ? prevValue
            : currentValue + prevValue,
        0
      ) / totalElements;

    return {
      min: minValue,
      max: maxValue,
      count: totalElements,
      avg: avgValue,
    };
  }
}
