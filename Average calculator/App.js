var firstNumber = "";
var secondNumber = "";
var operator = "";
var isSecond = false;

function updateDisplay(value) {
  document.getElementById("display").value = value;
}

function appendValue(value) {
  if (value === '+' || value === '-' || value === '*' || value === '/' || value === '%') {
    operator = value;
    isSecond = true;
    updateDisplay(firstNumber + operator);
  } else {
    if (!isSecond) {
      firstNumber += value;
    } else {
      secondNumber += value;
    }

    updateDisplay(
      firstNumber +
      (operator ? operator : "") +
      secondNumber
    );
  }
}

function clearDisplay() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  isSecond = false;
  updateDisplay("");
}

function calculate() {
  var num1 = parseFloat(firstNumber);
  var num2 = parseFloat(secondNumber);
  var result = 0;

  if (operator === "+") result = num1 + num2;
  else if (operator === "-") result = num1 - num2;
  else if (operator === "*") result = num1 * num2;
  else if (operator === "/") result = num1 / num2;
  else if (operator === "%") result = (num1 * num2) / 100;

  updateDisplay(result);

  firstNumber = result.toString();
  secondNumber = "";
  operator = "";
  isSecond = false;
}

