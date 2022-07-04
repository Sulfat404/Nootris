let cart = document.querySelector(".cart__wrapper");
cart.addEventListener("click", countAmountOfCLicks);

let amountOfCLicks = 1;
let counter = document.createElement("div");


function countAmountOfCLicks() {
  if (amountOfCLicks === 1) {
    createCounter()
  } else {
    counter.innerHTML = `${amountOfCLicks}`;
  }
  amountOfCLicks++;
}


function createCounter() {
  counter.className = "counter";
  counter.innerHTML = `${amountOfCLicks}`;
  cart.append(counter);
  return counter;
}