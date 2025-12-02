'use strict'

const target = document.querySelector('#tulos');

const number = Number(prompt('Anna kokonaisluku '));
let isPrime = true;

if (number <= 1) {
  isPrime = false;
}

for (let i = 2; i < number; ++i) {
  if (number % i === 0) {
    isPrime = false;
  }
}

if (isPrime) {
  target.innerHTML = `${number} on alkuluku.`
} else {
  target.innerHTML = `${number} ei ole alkuluku.`
}