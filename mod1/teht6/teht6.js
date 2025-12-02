'use script';

const answer = confirm('Should I calculate the root? ');

if (answer === true) {
  const number = Number(prompt('Write a number '));

    if (number < 0) {
      document.querySelector('#tulos').innerHTML =
          'The square root of negative number is not defined.';
    } else {
      const root = Math.sqrt(number)
      document.querySelector('#tulos').innerHTML =
          `The square root of ${number} is ${root}.`;
    }
  } else {
    document.querySelector('#tulos').innerHTML =
        'The square root is not calculated';
  }