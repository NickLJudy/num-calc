import { add, sub, multi, divide ,calc} from './index';
import { innerDivide, safeInteger, convertExpand, generateArrayOfSameValue, } from "./util/index";
test('func: add', () => {
  expect(add(2, 4)).toBe("6");
});

test('func: sub', () => {
  expect(sub(2, 4)).toBe("-2");
});

test('func: multi', () => {
  expect(multi(0.2, 0.05)).toBe("0.01");
});

test('func: divide', () => {
  expect(divide("9007199254740997", 2n)).toBe("4503599627370498.5");
});

test('func: calc', () => {
  expect(calc("2", "4")).toBe("6");
  expect(calc(0.2, 0.1,'and')).toBe("0.3");
  expect(calc(Number.MAX_SAFE_INTEGER, 6,'plus')).toBe("9007199254740997");
  expect(calc(2, "-9007199254740997",'add')).toBe("-9007199254740995");

  expect(calc(2, 4,'-')).toBe("-2");
  expect(calc(Number.MIN_SAFE_INTEGER, 5,'minus')).toBe("-9007199254740996");
  expect(calc(0.2, 0.3,'sub')).toBe("-0.1");
  expect(calc(650.00e-4, 3.6e-2,'subtract')).toBe("0.029");

  expect(calc(0.2, 0.05,'*')).toBe("0.01");
  expect(calc(2.2, 100,'x')).toBe("220");
  expect(calc("9007199254740993", -0.5,'multi')).toBe("-4503599627370496.5");
  expect(calc(-1200.0, -1e-4,'multiply')).toBe("0.12");

  expect(calc("9007199254740997", 2n,'/')).toBe("4503599627370498.5");
  expect(calc(-0.3, -0.1,'divide')).toBe("3");
  expect(() => calc({}, -0.1,'divide')).toThrow();
  expect(() => calc("2e2e24fdff", -0.1,'divide')).toThrow();
  expect(calc(0.2, '-0.01','divide')).toBe('-20');
  expect(() => calc('NaN', '0.01')).toThrow();
  expect(calc('0.3e-5', '2e-15','-')).toBe("0.000002999999998");
  expect(calc('-34.5e6', '+2.10e-1','-')).toBe("-34500000.21");
});


test('func: innerDivide', () => {
  expect(innerDivide(2, 4)).toBe("0.5");
});

test('func: safeInteger', () => {
  expect(safeInteger("9007199254740997")).toBe("9007199254740997");
  expect(safeInteger("-9007199254740999")).toBe("-9007199254740999");
  expect(safeInteger(-9007199254740999n)).toBe("-9007199254740999");
  expect(safeInteger(-10.20)).toBe("-10.2");
  expect(safeInteger("-20")).toBe("-20");
});

test('func: convertExpand', () => {
  expect(()=>convertExpand("-02.001feferv")).toThrow();
  expect(convertExpand(2)).toEqual([0, 2n]);
  expect(convertExpand(2.1)).toEqual([1, 21n]);
  expect(convertExpand(2.001)).toEqual([3, 2001n]);
  expect(convertExpand("-02.001")).toEqual([3, -2001n]);
  expect(convertExpand(-2.1)).toEqual([1, -21n]);

  expect(convertExpand("020")).toEqual([0, 20n]);
  expect(convertExpand("10e3")).toEqual([0,10000n]);
  expect(convertExpand("10.00e-2")).toEqual([1,1n]);
  expect(convertExpand("-10.00e-2")).toEqual([1,-1n]);
  expect(convertExpand("+1234560000e16")).toEqual([0,12345600000000000000000000n]);
});

test('func: generateArrayOfSameValue', () => {
  expect(generateArrayOfSameValue(2)).toEqual([undefined, undefined]);
  expect(generateArrayOfSameValue(5, 123)).toEqual([123, 123, 123, 123, 123]);
  expect(generateArrayOfSameValue(5, { a: 1 })).toEqual([{ a: 1 }, { a: 1 }, { a: 1 }, { a: 1 }, { a: 1 }]);
});