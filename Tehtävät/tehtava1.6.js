"use strict";

const vastaus = confirm("Pitäisikö laskea neliöjuuri?");
if (vastaus) {
    const luku = parseInt(prompt("Anna luku: "));
    if (luku < 0) {
        document.querySelector("#neliöjuuri").innerHTML = "Negatiivisen luvun neliöjuurta ei ole määritetty."
    } else {
        let neliöjuuri = Math.sqrt(luku);
        document.querySelector("#neliöjuuri").innerHTML = `Neliöjuuri on ${neliöjuuri}`;
    }
} else {
    document.querySelector("#neliöjuuri").innerHTML = "Neliöjuurta ei laskettu.";
}


