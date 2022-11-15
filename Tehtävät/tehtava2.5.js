'use strict';

const luvut = []

for (let i = 0; i < Infinity; i++) {
    let luku = parseInt(prompt("Anna luku: "));
    if (luvut.includes(luku)) {
        document.querySelector("#luvut").innerHTML = "Luku on jo listassa.";
        break
    }
    else {
        luvut.push(luku);
    }
}
luvut.sort();
for (let luku of luvut) {
    console.log(`${luku}`);
}