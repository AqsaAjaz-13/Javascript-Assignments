// Ques # 1
var ques= prompt("city");
if (ques == "karachi") {
document.write("Welcome to city of lights!" + "<br>");
}

// // Ques # 2

var ans = prompt("gender");
if (ans =="male" ) {
document.write("Good morning sir!")
}

var ans = prompt("gender");
if(ans =="female" ) {
document.write("Good morning madam!" + "<br>");
}

// Ques # 3 



document.write("<h2>Traffic Signal Chart</h2>");
document.write("<table border='3' cellpadding='10'>");

document.write("<tr>");
document.write("<th>Signal Color</th>");
document.write("<th>Message</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>Red</td>");
document.write("<td>Must Stop</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>Yellow</td>");
document.write("<td>Ready to move</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>Green</td>");
document.write("<td>Move now</td>");
document.write("</tr>");

document.write("</table>" + "<br>");


// Ques # 4

var remainingFuel= prompt("fuel");
if(remainingFuel == "fuel is less 0.25 liters") {
document.write("Please refill the fuel in your car"+ "<br>")
}

//  Ques # 5
// Ques # 6

var sub1 = Number(prompt("Enter marks of subject 1"));
var sub2 = Number(prompt("Enter marks of subject 2"));
var sub3 = Number(prompt("Enter marks of subject 3"));

var totalMarks = 300;
var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade , remarks;

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
}

if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
}

if ( percentage >=60) {
  grade = "B";
  remarks = "You need to improve";
}

if (percentage >=50) {
  grade = "Fail";
  remarks = "Sorry";
}

document.write("<h2>" + " MarkSheet "+ "</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "% " + "<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>" + "<br>");

// Ques # 7

var number = 5;

var secretNumber = prompt ("user to guess the secret (1 to 10) ") ;

if(secretNumber == number) {
document.write("Aqsa correct Answer" +"<br>");

}

if(number + 1 == secretNumber) {
document.write("close enough to the correct number" + "<br>")
}

// Ques # 8

var  num =  prompt(" Enter a number");

if (num % 3 == 0) {
document.write("the number is divisible by 3" + "<br>")
}

if (num % 3 != 0) {
document.write("the number is not  divisible by 3" + "<br>")
}

// Ques # 9

var num = (prompt("Enter a number" ));

if (num % 2 === 0) {
document.write("The number is Even" );
}

if (num % 2 !== 0) {
  document.write("The number is Odd") + "<br>";
}

// Ques # 10 

var T = Number(prompt("Enter temperature"));

if (T > 40) {
  document.write("It is too hot outside");
}

if (T > 30 && T <= 40) {
  document.write("The Weather today is Normal");
}

if (T > 20 && T <= 30) {
  document.write("Today's Weather is cool");
}

if(T > 10 && T <= 20) {
  document.write("OMG! Today's weather is so Cool" + "<br>");
}

// Ques # 11

var num1 = Number(prompt("Enter first number"));
var num2 = Number(prompt("Enter second number"));
var op = prompt("Enter operation (+, -, *, /, %)");

if (op === "+") {
  document.write("Result: " + (num1 + num2));
}

if (op === "-") {
  document.write("Result: " + (num1 - num2));
}

if (op === "*") {
  document.write("Result: " + (num1 * num2));
}

if (op === "/") {
  document.write("Result: " + (num1 / num2));
}

if (op === "%") {
  document.write("Result: " + (num1 % num2) + "<br>");
}


