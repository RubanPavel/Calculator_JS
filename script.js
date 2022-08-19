var buttonMinus = document.getElementById("buttonMinus");
var buttonPlus = document.getElementById("buttonPlus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDivide = document.getElementById("buttonDivide");

var inputOne = document.getElementById("number1");
var inputTwo = document.getElementById("number2");

function getNumber1() {
  return (number1 = Number(inputOne.value));
}

function getNumber2() {
  return (number2 = Number(inputTwo.value));
}

function newOperation(whatSimbol) {
  if (whatSimbol === "-") {
    var result = getNumber1() - getNumber2();
  } else if (whatSimbol === "+") {
    var result = getNumber1() + getNumber2();
  } else if (whatSimbol === "*") {
    var result = getNumber1() * getNumber2();
  } else if (whatSimbol === "/") {
    var result = getNumber1() / getNumber2();
  } else {
    window.alert("warning!!!!!");
  }
  window.alert(result);
}

function onButtonClick(eventObject) {
  let clickElement = eventObject.currentTarget;
  let whatSimbol = clickElement.innerText;
  newOperation(whatSimbol);
}

buttonMinus.addEventListener("click", onButtonClick);
buttonPlus.addEventListener("click", onButtonClick);
buttonMultiply.addEventListener("click", onButtonClick);
buttonDivide.addEventListener("click", onButtonClick);
