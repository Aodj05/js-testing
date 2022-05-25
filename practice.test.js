const practice = require('./practice');
const cap = practice.cap;
const reverseString = practice.reverseString;

test('first letter captitalized', () => {
  expect(cap("justin")).toBe("Justin");
});

test('reverse a string', () => {
  expect(reverseString("nitsuJ")).toBe("Justin");
});
