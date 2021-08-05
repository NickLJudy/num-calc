import {checkoutClacFnParamsDataType} from './util/errorSummary';
import {
  generateArrayOfSameValue,
  convertExpand,
  safeInteger,
  devide,
} from './util';

/**
 * @return [string]
*/
export function clac(num1, num2, operator = '+') {
  checkoutClacFnParamsDataType(num1);
  checkoutClacFnParamsDataType(num2);

  const [numDigit1, innerExpandNum1] = convertExpand(num1);
  const [numDigit2, innerExpandNum2] = convertExpand(num2);
  const diffDigit = BigInt(Math.abs(numDigit2 - numDigit1));
  const maxDigit = Math.max(numDigit1, numDigit2);
  const [expandNum1, expandNum2] = numDigit2 >= numDigit1 ? [
    innerExpandNum1 * (diffDigit === 0n ? 1n : 10n ** diffDigit),
    innerExpandNum2,
  ] : [
    innerExpandNum1,
    innerExpandNum2 * (diffDigit === 0n ? 1n : 10n ** diffDigit)
  ];

  function union(result, digit = maxDigit) {
    const decimalPoint = digit - result.length;

    if (decimalPoint >= 0) {
      const resultStr = ['0.'].concat(generateArrayOfSameValue(decimalPoint, '0'), result).join('');

      return safeInteger(resultStr);
    };
    if (digit !== 0) result.splice(-digit, 0, '.');
    return safeInteger(result.join(''))
  }

  switch (operator) {
    case '*':
    case 'x':
    case 'multi':
    case 'multiply': return union(String(expandNum1 * expandNum2).split(''), maxDigit * 2);

    case '/':
    case 'divide': devide(expandNum1, expandNum2);

    case '-':
    case 'minus':
    case 'sub':
    case 'subtract': return union(String(expandNum1 - expandNum2).split(''));

    case '+':
    case 'and':
    case 'plus':
    case 'add':
    default: {
      return union(String(expandNum1 + expandNum2).split(''));
    };
  }
}