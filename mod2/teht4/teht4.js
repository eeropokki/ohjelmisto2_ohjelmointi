'use strict'

let numbers = [];
let num = Number(prompt('Anna numero (0 lopettaa): '));

while (num !== 0) {
  numbers.push(num);
  num = Number(prompt('Anna numero (0 lopettaa): '));
}

numbers.sort((a, b) => b - a);

console.log('Numerot suurimmasta pienimpään: ');
console.log(numbers);