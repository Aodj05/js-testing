function cap(string) {
  string = string.toLowerCase;
  const fc = string.charAt(0).toUpperCase;
  return string + fc.slice(1);
}

module.exports = cap;