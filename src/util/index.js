import convertScientificNotationToString, { removeExtraZeros } from './convertScientificNotationToString';
import {multi,sub,add} from './../index';

function isDecimal(param) {
  const paramStr = String(param);
  const { length } = paramStr;
  const index = paramStr.indexOf('.');

  return index !== -1 && index !== length - 1;
}

export function innerDivide(a, b) {
  const imperfect = a / b;

  return add(imperfect, sub(a,multi(imperfect , b)) / Number(b));
}


export function generateArrayOfSameValue(length, value) {
  let arr = [];

  for (let i = 0; i < length; i++) arr.push(value);
  return arr;
}

export function safeInteger(num) {
  return num < Number.MAX_SAFE_INTEGER && num > Number.MIN_SAFE_INTEGER ?
    (isDecimal(num) ? removeExtraZeros(num) : num) :
    String(num);
}

export function convertExpand(num) {
  const numStr = convertScientificNotationToString(num);

  return [
    (numStr.split('.')[1] || '').length,
    BigInt(numStr.replace('.', '')),
  ];
}

export default {
  innerDivide,
  safeInteger,
  convertExpand,
  generateArrayOfSameValue,
}