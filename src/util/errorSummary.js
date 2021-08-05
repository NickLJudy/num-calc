function unifiedHandlingDataTypeError(functionName, parameter) {
  throw new Error(`Please check the function:${functionName} parameter(${parameter}) data type(${typeof parameter} is not allowed).`);
}

export function checkoutClacFnParamsDataType(param) {
  const datatype = typeof param;
  const datatypeArr = ['string', 'number', 'bigint'];

  if (datatype === 'string' && isNaN(Number(param))) unifiedHandlingDataTypeError('clac',param);
  if (!datatypeArr.includes(datatype)) unifiedHandlingDataTypeError('clac',param);
}
