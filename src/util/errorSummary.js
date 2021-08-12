export function unifiedHandlingDataTypeError(functionName, parameter) {
  throw new Error(`Please check the function:${functionName} parameter(${parameter}) data type(${typeof parameter} is not allowed).`);
}

export function checkoutCalcFnParamsDataType(param) {
  const datatype = typeof param;

  if (datatype === 'string' && isNaN(Number(param))) unifiedHandlingDataTypeError('calc',param);
  if (!['string', 'number', 'bigint'].includes(datatype)) unifiedHandlingDataTypeError('calc',param);
}
