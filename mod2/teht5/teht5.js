'use strict'

let numbers = [];
let duplicateFound = false;

let num = Number(prompt('Anna numero: '));

while (duplicateFound === false) {

  if (numbers.includes(num)) {
    console.log(`Numero ${num} on jo annettu.`);
    duplicateFound = true;
  } else {
    numbers.push(num);
    num = Number(prompt('Anna numero: '));
  }
}

numbers.sort((a, b) => a - b);

console.log('Numerot nousevassa järjestyksessä.');
console.log(numbers);