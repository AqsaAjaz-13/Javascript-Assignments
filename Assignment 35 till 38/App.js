//ques # 1
function showDateTime() {
  var now = new Date();
  document.write(now);
}

showDateTime();

//ques# 2
function greetUser(firstName, lastName) {
  var fullName = firstName + " " + lastName;
  alert("Hello " + fullName);
}

greetUser("Aqsa", "Ajaz");

//ques # 3
function addTwoNumbers() {
  var num1 = prompt("Enter first number:");
  var num2 = prompt("Enter second number:");

  var sum = Number(num1) + Number(num2);
  return sum;
}

var result = addTwoNumbers();
document.write("Sum is: " + result);

//ques 4
function calculator(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } 
  else if (operator === "-") {
    return num1 - num2;
  } 
  else if (operator === "*") {
    return num1 * num2;
  } 
  else if (operator === "/") {
    return num1 / num2;
  } 
  else {
    return "Invalid operator";
  }
}

var n1 = Number(prompt("Enter first number:"));
var n2 = Number(prompt("Enter second number:"));
var op = prompt("Enter operator (+, -, *, /):");

var result = calculator(n1, n2, op);
document.write("Result is: " + result);

// ques 5 
function square(num) {
  return num * num;
}

var number = Number(prompt("Enter a number:"));
var result = square(number);

document.write("Square is: " + result);

//ques 6
function factorial(num) {
  var fact = 1;

  for (var i = 1; i <= num; i++) {
    fact = fact * i;
  }

  return fact;
}

var number = Number(prompt("Enter a number:"));
var result = factorial(number);

document.write("Factorial is: " + result);

//ques 7
function showCounting(start, end) {
  for (var i = start; i <= end; i++) {
    document.write(i + "<br>");
  }
}

var startNum = Number(prompt("Enter start number:"));
var endNum = Number(prompt("Enter end number:"));

showCounting(startNum, endNum);

//ques 8
function calculateHypotenuse(base, perpendicular) {
    
    function calculateSquare(x) {
        return x * x;
    }

    var hypotenuse = Math.sqrt(
        calculateSquare(base) + calculateSquare(perpendicular)
    );

    return hypotenuse;
}

var result = calculateHypotenuse(3, 4);
console.log("Hypotenuse:", result);

//ques 9

function calculateArea(width, height) {
    return width * height;
}

// Function call with values
var area1 = calculateArea(5, 10);
console.log("Area (arguments as value):", area1);

function calculateArea(width, height) {
    return width * height;
}

var w = 7;
var h = 4;

var area2 = calculateArea(w, h);
console.log("Area (arguments as variables):", area2);

//ques 10 
function isPalindrome(str) {
    var reversedStr = str.split('').reverse().join('');
    
    if (str === reversedStr) {
        return "Palindrome";
    } else {
        return "Not a Palindrome";
    }
}

//ques 11
function capitalizeWords(str) {
  var words = str.split(" ");
  var result = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var capitalWord = word[0].toUpperCase() + word.slice(1);
    result.push(capitalWord);
  }

  return result.join(" ");
}

var input = "the quick brown fox";
console.log(capitalizeWords(input));

//ques 12
function findLongestWord(str) {
  var words = str.split(" ");
  var longest = words[0];

  for (var i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}


var input = "Web Development Tutorial";
console.log(findLongestWord(input));