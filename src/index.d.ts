export declare function add(
  num1: string | number | bigint,
  num2: string | number | bigint
  ): string;
export declare function sub(
  num1: string | number | bigint,
  num2: string | number | bigint
): string;
export declare function multi(
  num1: string | number | bigint,
  num2: string | number | bigint
): string;
export declare function devide(
  num1: string | number | bigint,
  num2: string | number | bigint
): string;
export declare function calc(
  num1: string | number | bigint,
  num2: string | number | bigint,
  operator: '+' | 'and' | 'plus' | 'add' | '-' | 'minus' | 'sub' | 'subtract' | '*' | 'x' | 'multi' | 'multiply' | '/' | 'divide'
): string;

declare const _default: {
  add: typeof add;
  sub: typeof sub;
  multi: typeof multi;
  devide: typeof devide;
  calc: typeof calc;
};
export default _default;