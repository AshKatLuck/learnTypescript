// type Operations = {
//   add: (a: number, b: number) => number;
//   subtract: (a: number, b: number) => number;
// };
// type Results = {
//   add: number;
//   subtract: number;
// };
// let MathOperations: Operations = {
//   add(a: number, b: number) {
//     return a + b;
//   },
//   subtract(a: number, b: number) {
//     return a - b;
//   },
// };

// let answer: Results = {
//   add: MathOperations.add(10, 60),
//   subtract: MathOperations.add(60, 20),
// };

type Operations = {
  readonly add: (a: number, b: number) => number;
  readonly subtract: (a: number, b: number) => number;
};
type Results<T> = {
  -readonly [Key in keyof T]: number;
};
let MathOperations: Operations = {
  add(a: number, b: number) {
    return a + b;
  },
  subtract(a: number, b: number) {
    return a - b;
  },
};

let answer: Results<Operations> = {
  add: MathOperations.add(10, 60),
  subtract: MathOperations.add(60, 20),
};

answer.add = 10;
