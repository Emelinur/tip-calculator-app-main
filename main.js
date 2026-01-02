const billInput = document.querySelector("#bill-input");
const btns = document.querySelectorAll(".btn");
const peopleInput = document.querySelector("#peopleInput");
const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount"); 
const resetBtn = document.querySelector("#reset-btn");
const peopleError = document.querySelector("#people-error")

let billValue=0;
let peopleValue=1;
let tipValue=0.05;

billInput.addEventListener("input", ()=>{
billValue=Number(billInput.value)
console.log(billValue)
})


peopleInput.addEventListener("input", ()=>{
peopleValue=Number(peopleInput.value)
console.log(peopleValue)
})

function calculator(){
  if(peopleValue<=0){
     peopleError.innerHTML="Can't be zero";
    peopleError.style.color="red"
  }else{

    let tipAmountPerPerson=(billValue*tipValue)/peopleValue;
    let totalPerPerson=((billValue+(billValue*tipValue))/peopleValue)
    tipAmount.innerText = "$" + tipAmountPerPerson.toFixed(2);
    totalAmount.innerText = "$" + totalPerPerson.toFixed(2);
  }
}

btns.forEach((item)=>{
item.addEventListener("click",()=>{
calculator()

})
})
