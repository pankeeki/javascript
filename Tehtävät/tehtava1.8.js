'use strict';

const alkuvuosi = parseInt(prompt("Anna alkuvuosi: "))
const loppuvuosi = parseInt(prompt("Anna loppuvuosi: "))

for (let vuosi = alkuvuosi; vuosi <= loppuvuosi; vuosi++) {

    if (vuosi % 400 == 0) {
        document.querySelector("#karkausvuodet").innerHTML += "<li>" + vuosi + "</li>";
    } else if (vuosi % 4 == 0 && vuosi % 100 != 0) {
        document.querySelector("#karkausvuodet").innerHTML += "<li>" + vuosi + "</li>";
    }
}