// Example: Redirect after login success
function login() {
    // Simulated login validation
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Example: Hardcoded validation (Replace with backend validation)
    if (username === "admin" && password === "1234") {
        alert("Login Successful!");
        window.location.href = "success.html"; // Redirect to success page
    } else {
        alert("Invalid credentials!");
    }
}