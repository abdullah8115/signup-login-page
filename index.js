function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}



function signupUser() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    var age = document.getElementById("age").value;
    var birthDate = document.getElementById("birthDate").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;

    console.log("Username: " + newUsername);
    console.log("Password: " + newPassword);
    console.log("Age: " + age);
    console.log("Birth Date: " + birthDate);
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Email: " + email);

    let Userdata = {
        Username: newUsername,
        Password: newPassword,
        Age: parseInt(age),
        BirthDate: birthDate,
        FirstName: firstName,
        LastName: lastName,
        Email: email
    }

    console.log(Userdata)

    var AllUsers = localStorage.getItem("allusers");

    if (AllUsers === null) {

        AllUsers = [];
    } else {

        AllUsers = JSON.parse(AllUsers);
    }

    AllUsers.push(Userdata);

    localStorage.setItem("allusers", JSON.stringify(AllUsers));

    console.log(AllUsers);

    alert("Your account has been created!");

    // return false; 
}

var NewUsers = []

function loginUser() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    console.log("Login: " + username);
    console.log("Password: " + password);

    var allusers = localStorage.getItem("allusers");

    if (allusers === null) {
        alert("Please Create an Account!");
        return;
    }

    allusers = JSON.parse(allusers);

    var foundUser = null;

    for (var i = 0; i < allusers.length; i++) {
        if (allusers[i].Username === username) {
            foundUser = allusers[i];
            alert("USER FOUND");
            break;
        }
    }

    if (foundUser) {

        // User found, check password

        if (foundUser.Password === password) {
            alert("Your account is logged in now!");
        } else {
            alert("Incorrect password. Please try again.");
        }
    } else {
        alert("Username not found. Please create a new account!");
    }
}



openTab("login");

function openSignupPopup() {
    document.getElementById("signupPopup").style.display = "block";
}

function closeSignupPopup() {
    document.getElementById("signupPopup").style.display = "none";
}