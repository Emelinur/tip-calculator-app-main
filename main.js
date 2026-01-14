const billInput = document.querySelector("#bill-input");
const btns = document.querySelectorAll(".btn");
const btnCustom = document.querySelector(".custom-tip");
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
  calculator();
});

peopleInput.addEventListener("input", () => {
  peopleValue = parseInt(peopleInput.value);
  console.log(peopleValue);
  calculator();
});

function calculator() {
 
  if (!peopleValue || peopleValue<=0) {
    peopleError.style.display = "flex";
    peopleError.style.color = "rgb(200, 100, 100)";
    peopleInput.style.border = "2px solid rgb(200, 100, 100)";
    
    tipAmount.innerText = "$0.00";
    totalAmount.innerText = "$0.00";
    
  } else {
   
    peopleError.innerHTML = ""; 
    peopleInput.style.border = "none"; 
    
    let tipAmountPerPerson = (billValue * tipValue) / peopleValue;
    let totalPerPerson = (billValue / peopleValue) + tipAmountPerPerson;

    if (isNaN(tipAmountPerPerson) || isNaN(totalPerPerson)) {
        tipAmount.innerText = "$0.00";
        totalAmount.innerText = "$0.00";
    } else {
        tipAmount.innerText = "$" + tipAmountPerPerson.toFixed(2);
        totalAmount.innerText = "$" + totalPerPerson.toFixed(2);
    }
    
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

btnCustom.addEventListener("input",() => {
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
  billValue = 0;
  peopleValue = 1;
  tipValue = 0;
  tipAmount.innerText = "$0.00";
  totalAmount.innerText = "$0.00";
   document.querySelector(".active")?.classList.remove("active");
   peopleError.style.display = "none";
   peopleError.style.color = "";
  peopleInput.style.border = "";
});
