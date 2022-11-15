'use strict';

const syöte = parseInt(prompt("Anna luku: "));

let alkuluku = true
if (syöte == 2) {
    alkuluku = true
}
else {
    for (let i = 2; (i < syöte); i++) {
        if (syöte % i == 0) {
            alkuluku = false
        }
    }
    if (alkuluku == true) {
        document.querySelector("#syöte").innerHTML = 'Lukusi on alkuluku.';
    } else {
        document.querySelector("#syöte").innerHTML = 'Lukusi ei ole alkuluku.';
    }
}