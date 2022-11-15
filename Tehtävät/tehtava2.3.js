'use strict';

const koirat = []

for (let i = 0; i <6; i++) {
    let koira = prompt("Anna koiran nimi: ");
    koirat.push(koira);
}

koirat.sort();
koirat.reverse();

for (let koira of koirat) {
    document.querySelector("#koirat").innerHTML += "<li>" + koira + "</li>";
}
