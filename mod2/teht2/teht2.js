'use strict'

const target = document.querySelector('#tulos');

const count = Number(prompt('Montako osallistujaa? '));

let names = [];

for (let i = 0; i < count; i++) {
  const name = prompt(`Syötä osallistujan nimi ${i + 1}`)
  names.push(name);
}

names.sort();

for (let name of names){
  target.innerHTML += `<li>${name}</li>`;
}