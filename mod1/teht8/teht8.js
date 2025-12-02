'use strict';

const kohde = document.querySelector('#target')

const alku = Number(prompt('Syötä aloitusvuosi: '));
const loppu = Number(prompt('Syötä lopetusvuosi: '));

for (let vuosi = alku; vuosi <= loppu; vuosi++) {
  if (vuosi % 4 === 0 && (vuosi % 100 !== 0 || vuosi % 400 === 0)) {
    kohde.innerHTML += `<li>${vuosi}<li>`
  }
}