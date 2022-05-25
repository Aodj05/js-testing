const cap = require('./practice');

test('first letter captitalized', () => {
  expect(cap("justin")).toBe("Justin");
});

test('reverse a string', () => {
  expect(reverseString("justin")).toBe("nitsuj");
});
