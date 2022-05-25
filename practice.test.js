const cap = require('./practice');

test('first letter captitalized', () => {
  expect(cap("justin")).toBe("Justin");
});

test('reversed string', () => {
	expect(cap("justin")).toBe("nitsuj");
})

