import {unifiedHandlingDataTypeError,checkoutCalcFnParamsDataType} from './errorSummary';

test('func: unifiedHandlingDataTypeError', () => {
  expect(() => unifiedHandlingDataTypeError("beCheckedFunctionName","param1")).toThrow();
});

test('func: checkoutCalcFnParamsDataType', () => {
  expect(() => checkoutCalcFnParamsDataType({})).toThrow();
});