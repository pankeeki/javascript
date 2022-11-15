'use strict';

function even(kaikki) {
    const parilliset = []
    for (let luku of kaikki) {
        if (luku % 2 == 0) {
            parilliset.push(luku);
        }
    }
    return parilliset;
}

const kaikki = [7, 5, 13, 2, 14];
const parilliset = even(kaikki);

console.log(kaikki);
console.log(parilliset);

