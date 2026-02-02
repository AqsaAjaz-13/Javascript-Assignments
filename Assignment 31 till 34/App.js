//Ques #1
var currenttime = new Date();
document.write(currenttime);

// Ques 2
var date1 = new Date();
var month = d.getMonth();

var months = ["January","February","March","April","May","June",
              "July","August","September","October","November","December"];

console.log("Current month: " + months[month]);


// Ques 3
var date2 = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var today = days[d.getDay()];
console.log("Today is " + today.substring(0,3));

// ques 4
var date3 = new Date();
var day = d.getDay();

if(day == 0 || day == 6){
    console.log("It's Fun day");

}
// ques 5
var d = new Date();
var date = d.getDate();

if(date < 16){
    console.log("First fifteen days of the month");
}
else{
    console.log("Last days of the month");
}
// ques 6
var now = new Date();
var old = new Date("Jan 1, 1970");

var diff = now.getTime() - old.getTime();
var minutes = diff / (1000 * 60);

document.write("Minutes since Jan 1, 1970: " + minutes);
// ques 7
var now = new Date();
  var hour = now.getHours(); // 0–23 format

  if (hour < 12) {
    document.write("Its AM");
  } else {
    document.write("Its PM");
  }

// ques 8
  var laterDate = new Date(2020, 11, 31); 

  console.log("Later date: " + laterDate);
// ques 9

  var ramadanStart = new Date("June 18, 2015");

  var today = new Date();
  var diff = today - ramadanStart;

  var daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));


  console.log(daysPassed + " days have passed since 1st Ramadan, 2015");

// ques 10

  var start2015 = new Date("January 1, 2015");

  var referenceDate = new Date("December 5, 2015 22:50:16");

  var diffMs = referenceDate - start2015;

  var secondsPassed = Math.floor(diffMs / 1000);

  document.write("On reference date " + referenceDate +
    ",<br>" + secondsPassed +
    " seconds had passed since beginning of 2015");
// ques 11
 var currentDate = new Date();
  var hours = currentDate.getHours();
  currentDate.setHours(hours + 1);

  document.write(
    "current date: " + new Date() +
    "<br>1 hour ago, it was " + currentDate
  );
// ques 12
var currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - 100);

  alert(
    "current date: " + new Date() + "\n100 years back, it was " + currentDate
  );
// ques 13
// ques 14
