'use strict';

const nimi = prompt("Anna nimesi: ");
const tuvat = [];
tuvat[0] = "Rohkelikko";
tuvat[1] = "Puuskupuh";
tuvat[2] = "Luihuinen";
tuvat[3] = "Korpinkynsi";
const tupa = tuvat[Math.floor(Math.random() * tuvat.length)];
document.querySelector("#tupa").innerHTML = `${nimi}, tupasi on ${tupa}.`;