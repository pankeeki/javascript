'use strict';

const vuosi = parseInt(prompt("Vuosi: "));

if (vuosi % 400 == 0) {
    document.querySelector("#vuosi").innerHTML = "Vuosi on karkausvuosi.";
} else if (vuosi % 100 == 0) {
    document.querySelector("#vuosi").innerHTML = "Vuosi ei ole karkausvuosi.";
} else if (vuosi % 4 == 0) {
    document.querySelector("#vuosi").innerHTML = "Vuosi on karkausvuosi.";
} else {
    document.querySelector("#vuosi").innerHTML = "Vuosi ei ole karkausvuosi.";
}