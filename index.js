const buttons = document.querySelectorAll(".number");
console.log(buttons);
const cButton = document.querySelector(".C");
const addition = document.getElementById("addition");
const substract = document.getElementById("substract");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const equals = document.getElementById("equals");


for(let button of buttons){
  button.addEventListener("click", function (){
    const inputText = document.getElementById("numbersInput");
    inputText.value += button.dataset["value"];
  })
}

