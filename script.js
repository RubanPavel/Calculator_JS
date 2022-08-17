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
function onButtonMinusClick() {
  newOperation("-");
}

function onButtonPlusClick() {
  newOperation("+");
}

function onButtonMultiplyClick() {
  newOperation("*");
}

function onButtonDivideClick() {
  newOperation("/");
}

buttonMinus.addEventListener("click", onButtonMinusClick);
buttonPlus.addEventListener("click", onButtonPlusClick);
buttonMultiply.addEventListener("click", onButtonMultiplyClick);
buttonDivide.addEventListener("click", onButtonDivideClick);
