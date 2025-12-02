'use strict'

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const target = document.querySelector('#target');

const sides = Number(prompt('Montako sivua nopassa on? '));

let tulos = 0;

while (tulos !== sides) {
  tulos = rollDice(sides);
  target.innerHTML += `<li>${tulos}</li>`
}