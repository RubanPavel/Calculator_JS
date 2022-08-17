var buttonMinus = document.getElementById("buttonMinus");
var buttonPlus = document.getElementById("buttonPlus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDivide = document.getElementById("buttonDivide");

function onButtonMinusClick() {
  var inputOne = document.getElementById("number1");
  var inputTwo = document.getElementById("number2");

  var number1 = inputOne.value;
  var number2 = inputTwo.value;

  var minus = number1 - number2;
  window.alert(minus);
}

function onButtonPlusClick() {
  var inputOne = document.getElementById("number1");
  var inputTwo = document.getElementById("number2");

  var number1 = Number(inputOne.value);
  var number2 = Number(inputTwo.value);

  var summ = number1 + number2;
  window.alert(summ);
}

function onButtonMultiplyClick() {
  var inputOne = document.getElementById("number1");
  var inputTwo = document.getElementById("number2");

  var number1 = inputOne.value;
  var number2 = inputTwo.value;

  var multiply = Number(number1 * number2);
  window.alert(multiply);
}

function onButtonDivideClick() {
  var inputOne = document.getElementById("number1");
  var inputTwo = document.getElementById("number2");

  var number1 = inputOne.value;
  var number2 = inputTwo.value;

  var divide = Number(number1 / number2);
  window.alert(divide);
}

buttonMinus.addEventListener("click", onButtonMinusClick);
buttonPlus.addEventListener("click", onButtonPlusClick);
buttonMultiply.addEventListener("click", onButtonMultiplyClick);
buttonDivide.addEventListener("click", onButtonDivideClick);
