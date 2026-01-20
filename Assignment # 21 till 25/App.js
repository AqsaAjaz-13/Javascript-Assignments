//Ques #1

var firstName = prompt("What is your First Name");
var lastName = prompt("What is your Last Name");
var fullName = firstName + " " + lastName;
document.write(fullName + "<br>" + "<br>");
//Ques #2

var favmob = prompt("What is your favorite mobile phone model");
var mobLength = favmob.length;
document.write("Favorite mobile phone model :" +"  " +  favmob + "<br>");
document.write(" Length of string :" + " "  + mobLength + "<br>" +"<br>");
//Ques #3

var word = "Pakistani";
var findWord = word.indexOf("n");
document.write("String : " + word + "<br>");
document.write("index of 'n' : " + findWord + "<br>" + "<br>");


//Ques #4
var letter = "Hello world";
var findLetter = letter.lastIndexOf("l");
document.write ("String :" + letter + "<br>" );
document.write ("Last index of 'l' :" + findLetter + "<br>" + "<br>" );

//Ques #5
var nationality = "Pakistani";
var character = nationality.charAt(3);
document.write("String : " + nationality + "<br>");
document.write("Character at index 3 : " + character + "<br> " + "<br>");

//Ques #6
var firstName = prompt("What is your First Name");
var lastName = prompt("What is your Last Name");
var fullName = firstName.concat ( " " , lastName + "<br>")
document.write(fullName + "<br>" + "<br>");
//Ques #7

var city = "Hyderabad";
var newCity = city.replace("Hyder" , " Islam");
document.write(newCity + "<br>" + "<br>");

//Ques #8

var message = "Ali and Sami are Bestfriends. They play Circket and Football together";
var replacedMessage = message.replaceAll("and" , "&");
document.write( "Message" + replacedMessage + "<br>" + "<br>");
//Ques #9

var value = "472";
document.write("Value : " + value + "<br>");
document.write("Type of: " + typeof value + "<br>" + "<br>");

var convertedValue = Number(value);
document.write("Value : " + convertedValue + "<br>");
document.write("Type of : " +  typeof convertedValue + "<br>" + "<br>");

//Ques #10

var  userData = "peanut";
var  newData = userData.toUpperCase("peanut");
document.write("User input : " + userData + "<br>")
document.write( "Upper case : " + newData + "<br>" + "<br>");
//Ques #11

var language = prompt("What programmimg language are u learning");
var firstChar = language[0].toUpperCase();
var restChar = language.slice (1).toLowerCase();

var titleCase = firstChar + restChar;
document.write("Title Case : " + titleCase + "<br>" + "<br>");
//Ques #12

var number = 35.36
var newNumber = number.toString();
var result = newNumber.replace("." , "");
document.write("user input :" + number + "<br>");
document.write("Result : " + result + "<br>" + "<br>");

//Ques #13
var username = prompt("Enter username:");
var isValid = true;

for (var i = 0; i < username.length; i++) {
  var code = username.charCodeAt(i);


  if (code === 64 || code === 46 || code === 44 || code === 33) {
    isValid = false;
    break;
  }
}

if (isValid) {
  document.write("Username is valid" + "<br>");
} else {
  alert("Please enter a valid username");
}

//Ques #14
var items = ["cake","apple","cookie","chips","patties"];

var userInput = prompt("Enter item to search:");
var searchItem = userInput.toLowerCase();
var found = false;

for (var i = 0; i < items.length; i++) {
  if (items[i].toLowerCase() === searchItem) {
    found = true;
    break;
  }
}

if (found) {
  document.write(searchItem + " is available in the list." + "<br>");
} else {
  document.write(searchItem + " is not available in the list." + "<br>");
}
//Ques #15

//Ques #16

var university = "University of Karachi";

var arr = university.split(" ");

for (var i = 0; i < arr.length; i++) {
  document.write(arr[i] + "<br>");
}
//Ques #17

var userCharacter = "Pakistan";
var lastCharacter = userCharacter[userCharacter.length-1];
document.write(lastCharacter + "<br>");
//Ques #18

