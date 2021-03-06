const practice = require('./practice');
const cap = practice.cap;
const reverseString = practice.reverseString;
const calc = practice.calc;
const cipher =  practice.cipher;
const analyzeArray = practice.analyzeArray
const array =analyzeArray([1,8,3,4,2,6]);

test('first letter captitalized', () => {
  expect(cap("justin")).toBe("Justin");
});

test('reverse a string', () => {
  expect(reverseString("nitsuJ")).toBe("Justin");
});

test('add 1 + 2 to equal 3', () => {
  expect(calc.add(1, 2)).toEqual(3);
});

test('subtract 2 - 1 to equal 1', () => {
  expect(calc.sub(2, 1)).toEqual(1);
});

test('divide 6 by 2 to equal 3', () => {
  expect(calc.div(6, 2)).toEqual(3)
});

test('multiply 3 * 2 to equal 6', () => {
	expect(calc.mult(3, 2)).toEqual(6);
});

test('cipher shifts', () => {
	expect(cipher("these are shifted", 7)).toBe("aolzl'hyl'zopmalk");
});

test('cipher shifts with capitals', () => {
	expect(cipher("These Are Shifted", 7)).toBe("[olzl'Hyl'Zopmalk");
});

test('cipher shifts with symbols', () => {
	expect(cipher("These Are Shifted !@#$%", 7)).toBe("[olzl'Hyl'Zopmalk'(G*+,");
});

test('Array is averaged', () => {
  expect(array['average']).toBe(4);
});

test('Array min', () => {
  expect(array['min']).toBe(1);
});

test('Array max', () => {
  expect(array['max']).toBe(8);
});

test('Array length', () => {
  expect(array['length']).toBe(6);
});