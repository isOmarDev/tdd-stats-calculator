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
