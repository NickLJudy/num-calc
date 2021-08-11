import convertScientificNotationToString, {removeExtraZeros} from './convertScientificNotationToString.js';

test('func: convertScientificNotationToString', () => {
  expect(convertScientificNotationToString("020")).toBe("20");
  expect(convertScientificNotationToString("10e3")).toBe("10000");
  expect(convertScientificNotationToString("10.00e-2")).toBe("0.1");
});

test('func: removeExtraZeros', () => {
  expect(removeExtraZeros("020")).toBe("20");
  expect(removeExtraZeros("02.0")).toBe("2");
  expect(removeExtraZeros("02.100")).toBe("2.1");
});