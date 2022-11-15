'use strict';

function roll() {
    return Math.floor(Math.random() * 6 + 1);
}

let luku = 0
while (luku != 6) {
    luku = roll();
    document.querySelector("#heitot").innerHTML += "<li>" + luku + "</li>";
}

