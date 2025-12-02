'use strict'

const target = document.querySelector('#tulos');

let dogs = [];

for (let i = 1; i < 7; i++){
  const name = prompt(`Syötä koiran ${i} nimi: `)
  dogs.push(name);
}

dogs.sort().reverse();

for (let dog of dogs){
  target.innerHTML += `<li>${dog}</li>`
}