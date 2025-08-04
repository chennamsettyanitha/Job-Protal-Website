document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form from submitting normally
  
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;
  
      // Simple client-side validation
      if (!username || !password) {
        alert("Please enter both username and password.");
        return;
      }
  
      // Dummy check — you can replace this with actual validation using backend
      if (username === "admin" && password === "admin123") {
        alert("Login successful!");
        // Save session data (optional)
        localStorage.setItem("loggedInUser", username);
        // Redirect to homepage or dashboard
        window.location.href = "index.html";
      } else {
        alert("Invalid username or password. Please try again.");
      }
    });
  });
  