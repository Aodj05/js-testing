function cap(string) {
  string = string.toLowerCase();
  const fc = string.charAt(0).toUpperCase();
  return fc + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join('');
}

module.exports = { cap,
	reverseString
};