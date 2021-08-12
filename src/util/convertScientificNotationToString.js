import { unifiedHandlingDataTypeError } from './errorSummary';

export function removeExtraZeros(param) {
  const paramStr = String(param);
  const Minus = paramStr[0] === '-';
  let _param = paramStr[0] === '+' || paramStr[0] === '-' ? paramStr.substring(1) : paramStr;

  if (!_param.includes('.')) {
    if (Number(_param) === 0) return param;
    while (_param[0] === '0') _param = _param.substring(1);

    return `${Minus ? '-' : ''}${_param}`;
  }

  while (_param[0] === '0' && _param.indexOf('.') !== 1) _param = _param.substring(1);  //left-side
  while (_param[_param.length - 1] === '0') _param = _param.substring(0, _param.length - 1);  //right-side
  if (_param[_param.length - 1] === '.') _param = _param.substring(0, _param.length - 1);

  return `${Minus ? '-' : ''}${_param}`;
}

/**
 * @param Must be able to convert to number.
 * @description If the argument is in scientific notation form(custom scientific notation is also accepted), convert it to string form, convenient numerical calculation.
 * @notice The powers of scientific enumeration cannot exceed safe limits.
*/
export default function convertScientificNotationToString(param) {
  if (isNaN(Number(param))) unifiedHandlingDataTypeError('convertScientificNotationToString', param);

  const [m, n] = String(param).trim().split(/[eE]/);

  if (n === undefined || Number(n) === 0) return removeExtraZeros(m);
  let innerM = m[0] === '+' ? m.substring(1) : m;
  let innerN = n[0] === '+' ? n.substring(1) : n;

  const Minus = innerM[0] === '-';
  const absM = innerM.substring(Minus ? 1 : 0);
  const pointIndex = absM.indexOf('.');
  let fillZero = '';
  let timer = Math.abs(innerN);
  let pendingArr = [];

  while (timer--) fillZero += '0';

  if (innerN[0] === '-') {
    pendingArr = `${fillZero}${absM.replace('.', '')}`.split('');

    pendingArr.splice(pointIndex === -1 ? innerN : pointIndex, 0, '.');

    return `${Minus ? '-' : ''}${removeExtraZeros(pendingArr.join(''))}`;
  }

  pendingArr = `${absM.replace('.', '')}${fillZero}`.split('');

  if (pointIndex !== -1) pendingArr.splice(pointIndex + Number(innerN), 0, '.');

  return `${Minus ? '-' : ''}${removeExtraZeros(pendingArr.join(''))}`;
}