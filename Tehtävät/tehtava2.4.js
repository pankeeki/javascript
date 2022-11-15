'use strict';

const luvut = []

for (let luku = 1; luku != 0;) {
    luku = parseInt(prompt("Anna luku: "));
    luvut.push(luku);
}
luvut.sort();
luvut.reverse();
console.log(luvut);