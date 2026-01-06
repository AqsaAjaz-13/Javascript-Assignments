// Ques # 1
var ch = prompt("Enter a character");

// get ASCII code
var code = ch.charCodeAt(0);

// check conditions
if ("code" >= 48 && "code" <= 57) {
  console.log("It is a Number");
}
else if ("code" >= 65 && "code" <= 90) {
  console.log("It is an Uppercase Letter");
}
else if ("code" >= 97 && "code" <= 122) {
  console.log("It is a Lowercase Letter");
}
else {
  console.log("Invalid input");
}

// Ques #2
var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");


if ("num1" > "num2") {
  console.log("First number is larger");
}
else if ("num2" > "num1") {
  console.log("Second number is larger");
}
else {
  console.log("Both numbers are equal");
}

// Ques # 3
var num = prompt("Enter a number");


if (num > 0) {
  console.log("Number is Positive");
}
else if (num < 0) {
  console.log("Number is Negative");
}
else {
  console.log("Number is Zero");
}

// Ques # 4
var ch = prompt("Enter a single character");

// convert to lowercase to handle A,E,I,O,U
ch = ch.toLowerCase();

if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
  console.log("true");
} else {
  console.log("false");
}
// // Ques # 5


var userPassword = prompt("Enter your password");
var correctPassword = "abc123";


// validation
if ("userPassword" === "") {
  console.log("Please enter your password");
}
else if ("userPassword" === "correctPassword") {
  console.log("Correct! The password you entered matches the original password");
}
else {
  console.log("Incorrect password");
}

// Ques # 6

var hour = prompt ("Enter hour" (0-23));
var greeting;


if ("hour" < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);


// Ques # 7
var time = prompt("Enter time in 24 hours format (e.g. 19 for 7pm)");

if (time >= 0 && time < 12) {
  document.write("Good Morning");
}
else if (time >= 12 && time < 17) {
  document.write("Good Afternoon");
}
else if (time >= 17 && time < 21) {
  document.write("Good Evening");
}
else if (time >= 21 && time <= 23) {
  document.write("Good Night");
}
else {
  document.write("Invalid Time");
}