// Ques #1

var arr = [];
arr[0] = [];
arr[1] = [];
arr[2] = [];

console.log(arr);

// Ques #2

var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
document.write(matrix[0] + "<br>");
document.write(matrix[1] + "<br>");
document.write(matrix[2] + "<br>");
// Ques #3 

for (var i=1; i<=10; i++){
    document.write(i + "<br>");
}
// Ques #4 

var num = prompt("Enter table number");
var length = prompt("Enter table length");

document.write("Multiplication table of " + num + "<br>");
document.write("Length " + length + "<br><br>");

for (var i = 1; i <= length; i++) {
  document.write(num + " x " + i + " = " + (num * i) + "<br>");
}
// Ques #5 

  var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

  for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
  }

  document.write("<br>");

  for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
  }

// Ques #6 

//  a)
  document.write("<b>Counting:</b><br>");
  for (var i = 1; i <= 15; i++) {
    document.write(i + " ");
  }

  document.write("<br><br>");

  // b) 
  document.write("<b>Reverse Counting:</b><br>");
  for (var i = 10; i >= 1; i--) {
    document.write(i + " ");
  }

  document.write("<br><br>");

  // c) 
  document.write("<b>Even:</b><br>");
  for (var i = 0; i <= 20; i += 2) {
    document.write(i + " ");
  }

  document.write("<br><br>");

  // d) 
  document.write("<b>Odd:</b><br>");
  for (var i = 1; i <= 19; i += 2) {
    document.write(i + " ");
  }

  document.write("<br><br>");

  // e) S
  document.write("<b>Series:</b><br>");
  for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k "+ "<br>");
  }
// Ques #7

// Ques #8 

var A = [24, 53, 78, 91, 12];

var largest = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}

document.write("Array items: " + A + "<br>");
document.write("The largest number is: " + largest + "<br>");
// Ques #9 

var A = [24, 53, 78, 91, 12];

var smallest = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] > smallest) {
    largest = A[i];
  }
}

document.write("Array items: " + A + "<br>");
document.write("The largest number is: " + smallest + "<br>");


// Ques #10 

var result = "";

for (var i = 5; i <= 100; i += 5) {
  result += i + ", ";
}

document.write("Multiples of 5 from 1 to 100:<br>");
document.write(result);