"use strict";

var cart = document.querySelector(".cart__wrapper");
cart.addEventListener("click", countAmountOfCLicks);
var amountOfCLicks = 1;
var counter = document.createElement("div");

function countAmountOfCLicks() {
  if (amountOfCLicks === 1) {
    createCounter();
  } else {
    counter.innerHTML = "".concat(amountOfCLicks);
  }

  amountOfCLicks++;
}

function createCounter() {
  counter.className = "counter";
  counter.innerHTML = "".concat(amountOfCLicks);
  cart.append(counter);
  return counter;
}