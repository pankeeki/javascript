'use strict';

const osallistujat = []
const joukko = parseInt(prompt("Montako osallistujaa? "));

for (let i = 1; i <= joukko; i++) {
    osallistujat.push(prompt(`Anna osallistujan ${i} nimi: `));
}

osallistujat.forEach((i) => {
    document.querySelector("#osallistujat").innerHTML += "<li>" + i + "</li>";
})
