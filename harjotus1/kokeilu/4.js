'use strict';

const koirat = [];

for (let i = 0; i < 6; i++){
    koirat.push(prompt('Anna koiran nimi: '));
}

console.log(koirat);

for (let koira of koirat){
    document.querySelector('#kohde').innerHTML += `<li>${koira}</li>`;
}