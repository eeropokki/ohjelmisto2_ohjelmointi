'use strict'

function concat(strings){
  let result = "";

  for (let i = 0; i < strings.length; i++){
    result += strings[i];
  }

  return result;
}

const ramones = ["Johnny", "DeeDee", "Joey", "Marky"];

const finalString = concat(ramones)

document.querySelector('#target').innerHTML =
    finalString;