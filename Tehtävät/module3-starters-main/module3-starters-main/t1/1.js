'use strict';

const mylist = document.querySelectorAll('li');
 mylist.forEach(function (target) {
   target.innerHTML = `${target.innerHTML}`;
 })