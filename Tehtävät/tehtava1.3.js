'use strict';

const luku1 = parseInt(prompt("Anna luku: "));
const luku2 = parseInt(prompt("Anna toinen luku: "));
const luku3 = parseInt(prompt("Anna kolmas luku: "));

document.querySelector("#summa").innerHTML = "summa on " + (luku1 + luku2 + luku3);
document.querySelector("#summatulo").innerHTML = "summatulo on " + luku1 * luku2 * luku3;
document.querySelector("#keskiarvo").innerHTML = "keskiarvo on " + ((luku1 + luku2 + luku3)/3);
