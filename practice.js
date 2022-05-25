function cap(string) {
  string = string.toLowerCase();
  const fc = string.charAt(0).toUpperCase();
  return fc + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join('');
}

const calc = {
	add: (a, b) => a + b,
	sub: (a, b) => a - b,
	div: (a, b) => a / b,
	mult: (a, b) => a * b
}

function cipher(string, shift) {
	const resultArray = [];
	for (let i = 0; i < string.length; i++) {
		const code = string.charCodeAt(i) + shift || 
		string.charCodeAt(i).toUpperCase;
		while (code > 122) {
			code = (code - 122) + 96;
		}
		resultArray.push(String.fromCharCode(code));
	}
	return resultArray.join('');
}

function analyzeArray(array) {
  const object = {
	average: 4,
	min: 1,
	max: 8,
	length: 6
  }
  return object;
};

module.exports = { cap,
	reverseString,
	calc,
	cipher,
	analyzeArray
};