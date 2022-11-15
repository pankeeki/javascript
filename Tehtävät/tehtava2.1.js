'use strict';

const luvut = []

luvut.push(parseInt(prompt("Anna luku: ")));
luvut.push(parseInt(prompt("Anna toinen luku: ")));
luvut.push(parseInt(prompt("Anna kolmas luku: ")));
luvut.push(parseInt(prompt("Anna neljäs luku: ")));
luvut.push(parseInt(prompt("Anna viides luku: ")));

for (let i = luvut.length - 1; i >= 0; i--) {
    console.log(`${luvut[i]}`);
}