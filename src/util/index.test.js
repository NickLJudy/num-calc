import { devide, safeInteger, convertExpand, generateArrayOfSameValue, } from "./index";

test('func: devide', () => {
  expect(devide(2, 4)).toBe("0.5");
});

test('func: safeInteger', () => {
  expect(safeInteger("9007199254740997")).toBe("9007199254740997");
  expect(safeInteger("-9007199254740999")).toBe("-9007199254740999");
  expect(safeInteger(-9007199254740999n)).toBe("-9007199254740999");
  expect(safeInteger(-10.20)).toBe("-10.2");
  expect(safeInteger("-20")).toBe("-20");
});

test('func: convertExpand', () => {
  expect(convertExpand(2)).toEqual([0, 2n]);
  expect(convertExpand(2.1)).toEqual([1, 21n]);
  expect(convertExpand(2.001)).toEqual([3, 2001n]);
});

test('func: generateArrayOfSameValue', () => {
  expect(generateArrayOfSameValue(2)).toEqual([undefined, undefined]);
  expect(generateArrayOfSameValue(5, 123)).toEqual([123, 123, 123, 123, 123]);
  expect(generateArrayOfSameValue(5, { a: 1 })).toEqual([{ a: 1 }, { a: 1 }, { a: 1 }, { a: 1 }, { a: 1 }]);
});