// Ques #1

var a= "aqsa" , b= "fatima", c= "aroosh";
document.write( "1)" + " " + a + "<br>" + "2)" + " "+ b + "<br>" + "3)"  + " "  + " " + c + "<br>" + "<br>");


// Ques #2

// 5 legal variables
var fullname = "fizza";
var age = 20;
var city_name = "karachi";
var $course = "web development";
var itStudent = true;

document.write("Full Name : " + fullname + "<br>");
document.write("Age : " + age + "<br>");
document.write("City : " + city_name + "<br>");
document.write("Course : " + $course + "<br>");
document.write("It Student : " + itStudent + "<br>" + "<br>");


// 5 illegal variables

// 1) Start from any number
document.write("1. var 1name <br>"); 

// 2) spaces are not allowed
document.write(" 2. var my name <br>");

// 3) special character are not allowed
document.write("3. var @age <br>");

// 4) reserved ketwords not allowed
document.write("4. var var <br>");

// 5) it is also not allowed
document.write("5. var alert <br> <br>");



// Ques #3

var text = "Rules for naming Js variables";
document.write( "<h1>" + text +"</h1>" + "<br>");

var $name = "Aqsa";
document.write(" Variable name must begin with letter " + "$name" + "<br>");

document.write("variable names are case sensitive" + "<br>");

document.write("variable name Should not be Js keywords" + "<br>");

