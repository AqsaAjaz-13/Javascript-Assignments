
function createCard() {

    // Getting values using .value
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var cnic = document.getElementById("cnic").value;
    var city = document.getElementById("city").value;

    if (firstName === "" || lastName === "" || email === "" || age === "" || cnic === "" || city === "") {
        alert("Please fill all fields before submitting!");
        return; 
    }

    var now = new Date();
    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString();

    var cardHTML = `
        <div class="card">
            <h3>User Details</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>CNIC:</strong> ${cnic}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Submitted On:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
        </div>
    `;

    document.getElementById("cardContainer").innerHTML = cardHTML;
}
