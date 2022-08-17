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

function onButtonMinusClick() {
  var minus = getNumber1 - getNumber2;
  window.alert(minus);
}

function onButtonPlusClick() {
  var summ = getNumber1 + getNumber2;
  window.alert(summ);
}

function onButtonMultiplyClick() {
  var multiply = getNumber1 * getNumber2;
  window.alert(multiply);
}

function onButtonDivideClick() {
  var divide = getNumber1 / getNumber2;
  window.alert(divide);
}

buttonMinus.addEventListener("click", onButtonMinusClick);
buttonPlus.addEventListener("click", onButtonPlusClick);
buttonMultiply.addEventListener("click", onButtonMultiplyClick);
buttonDivide.addEventListener("click", onButtonDivideClick);
