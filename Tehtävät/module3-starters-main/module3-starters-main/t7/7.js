'use strict';
function vaihda(){
    document.getElementById("target").src = "img/picB.jpg"

};
function palauta(){
    document.getElementById("target").src = "img/picA.jpg"

};

document.getElementById("trigger").onmouseover = function(){vaihda()};
document.getElementById("trigger").onmouseout = function(){palauta()};