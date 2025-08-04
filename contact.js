document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Stop default form submission
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      // Simple field validation
      if (!name || !email || !message) {
        alert("Please fill in all the fields.");
        return;
      }
  
      // Email format check
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      // Simulate form submission
      alert("Thank you, " + name + "! Your message has been sent.");
  
      // Optionally clear form
      form.reset();
    });
  });
  