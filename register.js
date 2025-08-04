document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector("form");
  
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent normal form submission
  
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;
  
      // Check all fields are filled
      if (!username || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
      }
  
      // Email format validation
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      // Password length validation
      if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
      }
  
      // Confirm password match
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
  
      // Success message (simulate storing the data)
      alert("Registration successful!");
  
      // Optional: Save user data locally (for simulation)
      localStorage.setItem("registeredUser", JSON.stringify({ username, email }));
  
      // Redirect to login page
      window.location.href = "file:///C:/Users/Anith/OneDrive/Desktop/job%20portal/rs.html";
    });
  });
  