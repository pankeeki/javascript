'use strict';

const result = document.querySelector("#result")
const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const start = document.querySelector("#start")
let operation = document.querySelector("#operation")

start.addEventListener("click", calculator)

function calculator() {
    let a = parseInt(num1.value)
    let b = parseInt(num2.value)
    if(operation.value === "add") {
        result.innerHTML = a + b
    } else if(operation.value === "sub") {
        result.innerHTML = a - b
    } else if(operation.value === "multi") {
        result.innerHTML = a * b
    } else if(operation.value === "div") {
        result.innerHTML = a / b
    }
}