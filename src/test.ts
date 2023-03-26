interface A {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let a: A = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
