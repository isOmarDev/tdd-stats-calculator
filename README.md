# TDD Stats Calculator

A simple Statistics Calculator built using Test-Driven Development (TDD).

## Project Overview (TDD)

A simple Statistics Calculator built using Test-Driven Development (TDD) by wishful thinking.  
The goal of the project is to practice writing tests first, then implementing the calculation logic to make the tests pass.

## What is Statistics Calculation?

Statistics calculation is the process of analyzing a sequence of numbers and extracting useful information such as minimum, maximum, count, and average values.

This project processes a sequence of integers and calculates key statistical values **without using system Math library functions**.

## Calculation Rules

The calculator determines:

- Minimum value
- Maximum value
- Number of elements in the sequence
- Average value

## Features

The stats calculator supports:

- Minimum value calculation
- Maximum value calculation
- Element counting
- Average value calculation
- Multiple values processing at once
- Built with TypeScript for type safety
- No usage of built-in Math functions

## Tech Stack

- TypeScript
- Node.js
- Jest (testing)

## Project Structure

```

tdd-stats-calculator/
├── src/
│   └── stats-calculator.test.ts
│   └── stats-calculator.ts
│   └── PROBLEMSTATEMENT.md
├── package.json
└── README.md

```

## Approach

This project follows the classic TDD cycle:

1. Write a failing test (**Red**)
2. Write the minimal code to make the test pass (**Green**)
3. Refactor the code while keeping tests green (**Refactor**)

## Getting Started

### Installation

```bash
git clone https://github.com/isOmarDev/tdd-stats-calculator.git
cd tdd-stats-calculator
npm install
```

## Running Tests

```bash
npm test
npm run test:watch
```

## API

### `StatsCalculator.run(numbers: number[]): StatsResult`

**Parameters:**

- `numbers` (number[]): The sequence of integers to process

**Returns:**

```ts
{
  min: number,
  max: number,
  count: number,
  avg: number
}
```

- `min`: The smallest value in the sequence
- `max`: The largest value in the sequence
- `count`: Total number of elements
- `avg`: The arithmetic mean of all values

## Usage

### Basic Usage

```ts
import { StatsCalculator } from './src/statsCalculator';

console.log(StatsCalculator.run([2, 4, 21, -8, 53, 40]));

/*
{
  min: -8,
  max: 53,
  count: 6,
  avg: 18.666666666667
}
*/
```

## Learning Goals

- Practice real-world TDD workflow
- Improve clean-class design using wishful thinking
