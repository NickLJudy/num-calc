export { clac } from './core';

export function add(num1, num2) {
  return clac(num1, num2);
}

export function sub(num1, num2) {
  return clac(num1, num2, '-');
}

export function multi(num1, num2) {
  return clac(num1, num2, '*')
}

export function divide(num1, num2) {
  return clac(num1, num2, '/');
}

export default {
  add,
  sub,
  multi,
  devide,
  clac,
}