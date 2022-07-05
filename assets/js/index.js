const cart = document.querySelector(".cart__wrapper");
const btnOrder = document.querySelector(".btn__order");
const personalAcc = document.querySelector(".nav__item:nth-child(5)");
const wrapperModalWindow = document.querySelector(".form__wrapper");
const modalWindow = document.querySelector(".form");
const wrapperModalWindowVisible = document.querySelector(".form__wrapper_visible");


cart.addEventListener("click", countAmountOfCLicks);
btnOrder.addEventListener("click", countAmountOfCLicks);
personalAcc.addEventListener("click", showModalWindow);
wrapperModalWindowVisible.addEventListener("click", closeModalWindow)



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

function showModalWindow() {
  wrapperModalWindow.classList.toggle("form__wrapper_visible");
  modalWindow.classList.toggle("form_visible");
  
  document.body.style.overflow = "hidden";
  if (!modalWindow.classList.contains("form_visible")) {
    document.body.style.overflow = "visible";
  }
}


function closeModalWindow() {
  wrapperModalWindow.classList.remove("form__wrapper_visible");
  modalWindow.classList.remove("form_visible");
  document.body.style.overflow = "visible";
}
