import {calc} from './core';

test('func: calc', () => {
  expect(calc(2, 4)).toBe("6");
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
});