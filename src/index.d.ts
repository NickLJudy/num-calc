export declare function add(...numArr: string[] | number[] | bigint[]): string;

export declare function sub(
  num1: string | number | bigint,
  num2: string | number | bigint
): string;

export declare function multi(...numArr: string[] | number[] | bigint[]): string;

export declare function divide(
  num1: string | number | bigint,
  num2: string | number | bigint
): string;

export declare function calc(
  ...paramArr: [
    ...numArr: string[] | number[] | bigint[],
    '+' | 'and' | 'plus' | 'add' | '-' | 'minus' | 'sub' | 'subtract' | '*' | 'x' | 'multi' | 'multiply' | '/' | 'divide'
  ]
): string;

declare const _default: {
  add: typeof add;
  sub: typeof sub;
  multi: typeof multi;
  divide: typeof divide;
  calc: typeof calc;
};
export default _default;