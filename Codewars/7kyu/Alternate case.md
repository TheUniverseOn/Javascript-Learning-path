
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

const alternateCase = s =>
  s
    .split('')
    .map(char => (isLowerCase(char) ? char.toUpperCase() : char.toLowerCase()))
    .join('')
