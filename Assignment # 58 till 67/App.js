//Ques #1
var mainContent = document.getElementById("main-content");
console.log(mainContent);

//Ques #2
var mainContent = document.getElementById("main-content");
var children = mainContent.children;

for (var i = 0; i < children.length; i++) {
    console.log(children[i]);
}

//Ques # 3
var renderElements = document.getElementsByClassName("render");

for (var i = 0; i < renderElements.length; i++) {
    document.write(renderElements[i].innerHTML + "<br>" + "<br>");
}

//Ques#4
var firstName = document.getElementById("first-name");
firstName.value = "Alex";

//Ques#5
document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";