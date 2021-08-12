import calc from './core';

export function sub(num1, num2) {
  return calc(num1, num2, '-');
}

export function devide(num1, num2) {
  return calc(num1, num2, '/');
}

export function multi(num1, num2) {
  return calc(num1, num2, '*')
}

export { calc };

export function add(num1, num2) { 
  return calc(num1, num2)
};

export default {
  add,
  sub,
  multi,
  devide,
  calc,
}