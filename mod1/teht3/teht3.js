'use strict'

let nro1 = Number(prompt('kirjoita luku: '))
let nro2 = Number(prompt('kirjoita luku: '))
let nro3 = Number(prompt('kirjoita luku: '))

let summa = nro1 + nro2 + nro3
let tulo = nro1 * nro2 * nro3
let keskiarvo = summa / 3

document.querySelector('#summa').innerHTML = `${summa}`
document.querySelector('#tulo').innerHTML = `${tulo}`
document.querySelector('#keskiarvo').innerHTML = `${keskiarvo}`
