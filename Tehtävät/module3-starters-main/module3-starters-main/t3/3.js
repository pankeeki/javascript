'use strict';
const nimet = ['John', 'Paul', 'Jones'];
for (let x = 0; x < 3; x++) {
    let nimi = document.createElement("li");
    nimi.innerHTML = nimet[x];
    document.getElementById("target").appendChild(nimi);
}