
// Ques 1 
var students = [];

// Ques 2

var studentNames = new Array();

// Ques 3
var fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);


// Ques 4
var numbers = [10, 20, 30, 40];
console.log(numbers);

// Ques 5 boolean array
var flags = [true, false, true];
console.log(flags);

// Ques 6
var mixedArray = ["Aqsa", 25, true, "Student"];
console.log(mixedArray);


// Ques 7

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS","M.phil" , "Phd"];

document.write("<h3> Qualifications: </h3>");

if (qualifications.length > 0) {
  document.write("1) " + qualifications[0] + "<br>");
  document.write("2) " + qualifications[1] + "<br>");
  document.write("3) " + qualifications[2] + "<br>");
  document.write("4) " + qualifications[3] + "<br>");
  document.write("5) " + qualifications[4] + "<br>");
  document.write("6) " + qualifications[5] + "<br>");
  document.write("7) " + qualifications[6] + "<br>");
  document.write("8) " + qualifications[7] + "<br>");
}


// Ques 8 

// Student names array
var students = ["Michael", "John", "Tony"];

var scores = [320, 230, 480];

var totalMarks = 500;

var percentage1 = (scores[0] / totalMarks) * 100;
var percentage2 = (scores[1] / totalMarks) * 100;
var percentage3 = (scores[2] / totalMarks) * 100;

document.write("Score of " + students[0] + " is " + scores[0] + ". Percentage: " + percentage1 + "%<br>");
document.write("Score of " + students[1] + " is " + scores[1] + ". Percentage: " + percentage2 + "%<br>");
document.write("Score of " + students[2] + " is " + scores[2] + ". Percentage: " + percentage3 + "%<br>");

// Ques 9

var colors = ["Red", "Green", "Blue"];


// a) add color start
var addStart = prompt("Enter color to add at beginning:");
if (addStart !== "") {
  colors.unshift(addStart);
}
document.write("<b>After adding at beginning:</b><br>" + colors + "<br><br>");

// b) Add color at end
var addEnd = prompt("Enter color to add at end:");
if (addEnd !== "") {
  colors.push(addEnd);
}
document.write("<b>After adding at end:</b><br>" + colors + "<br><br>");

// c) Add two more colors at beginning
colors.unshift("Purple", "Orange");
document.write("<b>After adding two colors at beginning:</b><br>" + colors + "<br><br>");

// d) Delete first color
colors.shift();
document.write("<b>After deleting first color:</b><br>" + colors + "<br><br>");

// e) Delete last color
colors.pop();
document.write("<b>After deleting last color:</b><br>" + colors);

// f
var colors = ["Red", "Green", "Blue"];


var index = prompt("Enter index number where you want to add color:");
var colorName = prompt("Enter color name:");

if (index !== "" && colorName !== "") {
  colors.splice(index, 0, colorName);
}

document.write("<b>Updated Array:</b><br>" + colors);

//  g
var colors = ["Red", "Green", "Blue", "Yellow", "Pink"];
document.write("<b>Original Array:</b><br>" + colors + "<br><br>");

var index = prompt("Enter index number from where you want to delete color(s):");
var count = prompt("How many colors you want to delete?");

if (index !== "" && count !== "") {
  colors.splice(index, count);
}

document.write("<b>Updated Array:</b><br>" + colors);

//  Ques 10 

var scores = [320, 230, 480, 120];

document.write("<b>Scores of Students:</b> " + scores + "<br><br>");

scores.sort();

document.write("<b>Ordered Scores of Students:</b> " + scores);


// Ques 11

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar" + "<br>"];

document.write("<b>Cities list:</b><br>" + cities + "<br><br>");

var selectedCities = cities.slice(2, 5);

document.write("<b>Selected cities list:</b><br>" + selectedCities);

// Ques 12

var arr = ["This", "is", "my", "cat"];

var result = arr.join(" ");

document.write(result);

// Ques 13

var fifoArray = [];

// store values one by one
fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");

document.write("<b>Stored values:</b><br>" + fifoArray + "<br><br>");

// access values in FIFO order
document.write("<b>Accessed values:</b><br>");
document.write(fifoArray.shift() + "<br>");
document.write(fifoArray.shift() + "<br>");
document.write(fifoArray.shift() + "<br>");

