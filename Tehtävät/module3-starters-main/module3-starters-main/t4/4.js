'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },

];
for(let x = 0; x < students.length; x++) {
  let oppilaat = document.createElement("option");
  oppilaat.text = students[x].name;
  oppilaat.value = students[x].id;
  document.getElementById("target").appendChild(oppilaat);
}
