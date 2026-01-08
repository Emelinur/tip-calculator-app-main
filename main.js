const billInput = document.querySelector("#bill-input");
const btns = document.querySelectorAll(".btn");
const btnCustom = document.querySelector(".btn-custom");
const peopleInput = document.querySelector("#peopleInput");
const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");
const resetBtn = document.querySelector("#reset-btn");
const peopleError = document.querySelector("#people-error");

let billValue = 0;
let peopleValue = 1;
let tipValue = 0;

billInput.addEventListener("input", () => {
  billValue = Number(billInput.value);
  console.log(billValue);
});

peopleInput.addEventListener("input", () => {
  peopleValue = Number(peopleInput.value);
  console.log(peopleValue);
});

function calculator() {
  if (peopleValue <= 0) {
    peopleError.innerHTML = "Can't be zero";
    peopleError.style.color = "red";
  } else {
    let tipAmountPerPerson = (billValue * tipValue) / peopleValue;
    let totalPerPerson = billValue / peopleValue + tipAmountPerPerson;
    tipAmount.innerText = "$" + tipAmountPerPerson.toFixed(2);
    totalAmount.innerText = "$" + totalPerPerson.toFixed(2);
  }
}

btns.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    item.classList.add("active");
    let btnText = item.innerText;
    let btnValue = parseFloat(btnText);
    let btnCal = Number(btnValue / 100);
    tipValue = btnCal;

    calculator();
  });
});

btnCustom.addEventListener("input", () => {
  let btnCustomValue = Number(btnCustom.value);
  if (!btnCustomValue) {
    tipValue = 0;
  } else {
    tipValue = Number(btnCustomValue / 100);
  }
  calculator();
});

resetBtn.addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";
  btnCustom.value = "";
  btnCal = 0;
  billValue = 0;
  peopleValue = 1;
  tipValue = 0;
  tipAmount.innerText = "$0.00";
  totalAmount.innerText = "$0.00";
  document.querySelector(".btn.active")?.classList.remove("active");
});
