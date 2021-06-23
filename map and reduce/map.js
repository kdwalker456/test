const data = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
];

// exercise
// convert the above array to [1, 2, 3, 4, 5, 6, 7, 8] using Array.map()

const convert = data.map((arr, index) => index + 1);

console.log(convert);

const dataTwo = [
  3,
  5,
  7,
  9,
  11,
  13,
  15,
  17,
];

// exercise
// using Array.reduce, get the sum of all the numbers in the array above

const reducer = dataTwo.reduce((acc, cur) => acc + cur, 20);

console.log(reducer);
