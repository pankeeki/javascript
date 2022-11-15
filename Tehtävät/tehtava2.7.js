'use strict';

const sides = parseInt(prompt("Anna nopan sivujen lukumäärä: "));
function roll(sides) {
    return Math.floor(Math.random() * sides + 1);
}

let luku = 0
while (luku != sides) {
    luku = roll(sides);
    document.querySelector("#heitot").innerHTML += "<li>" + luku + "</li>";
}