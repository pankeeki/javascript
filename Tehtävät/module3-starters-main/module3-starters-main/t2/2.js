'use strict';

const target = document.createElement("li");
target.innerHTML = '<li>First item</li><li class="my-item">Second item</li> <li>Third item</li>';
document.getElementById("target").appendChild(target);