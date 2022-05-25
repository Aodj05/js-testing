function cap(string) {
  string = string.toLowerCase();
  const fc = string.charAt(0).toUpperCase();
  return fc + string.slice(1);
}

module.exports = cap;