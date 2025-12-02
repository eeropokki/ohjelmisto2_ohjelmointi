'use strict'

const target = document.querySelector('#tulos');

const diceCount = Number(prompt('Montako noppaa? '))
const wantedSum = Number(prompt('Haluttu summa? '))

const trials = 10000;
let hits = 0;

for (let t = 0; t < trials; t++) {
  let sum = 0;

  for (let i = 0; i < diceCount; i++) {
    const roll = Math.floor(Math.random() * 6) + 1
    sum += roll;
  }

  if (sum === wantedSum) {
    hits++;
  }
}

const probability = (hits / trials) * 100

target.innerHTML = `Todennäköisyys saada summa ${wantedSum} ${diceCount} nopalla on ${probability.toFixed(2)}%`;