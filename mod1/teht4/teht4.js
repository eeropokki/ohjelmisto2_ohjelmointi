'use strict';

// kysy nimeä
const nimi = prompt('Mikä on nimesi? ');

const huoneet = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

// arvo huone (numero 1 - 4)
const arvottu = Math.floor(Math.random() * huoneet.length);

if (arvottu >= 0 && arvottu < huoneet.length) {
  document.querySelector('#tulos').innerHTML = `${nimi}, you are ${huoneet[arvottu]}.`;
}

