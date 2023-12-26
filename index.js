function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

function loginUser() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    console.log("Login: " + username);
    return false;
}

function signupUser() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    console.log("Signup: " + newUsername);
    return false; 
}

openTab("login");

function openSignupPopup() {
    document.getElementById("signupPopup").style.display = "block";
}

function closeSignupPopup() {
    document.getElementById("signupPopup").style.display = "none";
}

function signupUser() {

    closeSignupPopup();
    alert("Your account has been created!");
    return false;
}

