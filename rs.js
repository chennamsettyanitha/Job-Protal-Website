function register() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (username && email && password) {
        alert("Registration Successful!");
        window.location.href = "register-success.html"; // Redirect to success page
    } else {
        alert("Please fill all fields.");
    }
}

