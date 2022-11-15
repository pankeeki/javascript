'use strict';

const heitot = parseInt(prompt("Montako noppaa heitetään? "));
let summa = 0;
for (let i = 0; i < heitot; i++) {
    summa += parseInt(Math.random() * 6) +1;
}

document.querySelector("#noppasumma").innerHTML = `Silmäluvuista tulee yhteensä ${summa}`;