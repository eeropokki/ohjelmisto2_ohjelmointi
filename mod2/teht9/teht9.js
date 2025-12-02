'use strict';

function even(numbers) {
  const evenNumbers = [];
  for (let number of numbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number)
    }
  }
  return evenNumbers;
}

const numerot = [12, 3, 2, 1, 56, 7, 89, 23, 34, 45, 57];

const result = even(numerot);

console.log('alkuperäinen', numerot);
console.log('muutettu', result);