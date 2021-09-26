import calc from './core';

export function add(...numArr) {
  return calc(...numArr,'+');
};

export function sub(num1, num2) {
  return calc(num1, num2, '-');
};

export function divide(num1, num2) {
  return calc(num1, num2, '/');
};

export function multi(...numArr) {
  return calc(...numArr, '*')
};

export { calc };

export default {
  add,
  sub,
  multi,
  divide,
  calc,
};