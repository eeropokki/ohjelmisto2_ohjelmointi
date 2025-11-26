'use strict';

const vuosi = prompt('Anna vuosiluku: ');

if (vuosi % 400 === 0) {
  document.querySelector('#tulos').innerHTML = `${vuosi} on karkausvuosi.`
} else if (vuosi % 100 === 0) {
  document.querySelector('#tulos').innerHTML = `${vuosi} ei ole karkausvuosi.`
} else if (vuosi % 4 === 0) {
  document.querySelector('#tulos').innerHTML = `${vuosi} on karkausvuosi.`
} else {
  document.querySelector('#tulos').innerHTML = `${vuosi} ei ole karkausvuosi.`
}