import { checkoutCalcFnParamsDataType } from './util/errorSummary';
import {
  AddOpt,
  SubOpt,
  MultiOpt,
  DivideOpt,
} from './constants/index';
import {
  generateArrayOfSameValue,
  convertExpand,
  safeInteger,
  innerDivide,
} from './util/index';

/**
 * @return [string]
*/
function twoNumsOperation(num1, num2, operator = '+') {
  checkoutCalcFnParamsDataType(num1);
  checkoutCalcFnParamsDataType(num2);

  const [numDigit1, innerExpandNum1] = convertExpand(num1);
  const [numDigit2, innerExpandNum2] = convertExpand(num2);
  const diffDigit = BigInt(Math.abs(numDigit2 - numDigit1));
  const maxDigit = Math.max(numDigit1, numDigit2);
  const [expandNum1, expandNum2] = numDigit2 >= numDigit1 ? [
    innerExpandNum1 * (diffDigit === 0n ? 1n : 10n ** diffDigit),
    innerExpandNum2,
  ] : [
    innerExpandNum1,
    innerExpandNum2 * (10n ** diffDigit)
  ];

  function union(result, digit = maxDigit) {
    const [Minus, ...innerResult] = result[0] === '-' ? result : [''].concat(result);
    const decimalPoint = digit - innerResult.length;

    if (decimalPoint >= 0) {
      const resultStr = ['0.'].concat(generateArrayOfSameValue(decimalPoint, '0'), innerResult).join('');

      return safeInteger(Minus + resultStr);
    };
    if (digit !== 0) innerResult.splice(-digit, 0, '.');

    return safeInteger([Minus].concat(innerResult).join(''))
  }

  if (MultiOpt.includes(operator)) return union(String(expandNum1 * expandNum2).split(''), maxDigit * 2);

  if (DivideOpt.includes(operator)) return innerDivide(expandNum1, expandNum2);

  if (SubOpt.includes(operator)) return union(String(expandNum1 - expandNum2).split(''));

  return union(String(expandNum1 + expandNum2).split(''));
};

export default function calc(...paramArr) {
  if (paramArr.length < 3) throw new Error('Check whether the number of parameters of the calculated function meets requirements.(From:numeral-calc)');

  const operator = paramArr.pop();

  if (!AddOpt.concat(SubOpt, MultiOpt, DivideOpt).includes(operator)) throw new Error('Operator missing.');

  if (AddOpt.concat(MultiOpt).includes(operator) && paramArr.length > 2) {
    return paramArr.reduce((acc, cur) => twoNumsOperation(acc, cur, operator));
  }

  const [num1, num2] = paramArr;

  return twoNumsOperation(num1, num2, operator);
};