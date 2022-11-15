'use strict';

function concat(mauku) {
  let string = '';
  for (let x of mauku) {
    string += x;
  }
  return string;
}

const kissasanoo = ['Miau', 'Purr', 'Hiss'];
const output = concat(kissasanoo);

  console.log(output);

