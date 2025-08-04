document.addEventListener("DOMContentLoaded", function () {
    const applyForm = document.getElementById("applyForm");
    const messageDiv = document.getElementById("message");

    applyForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Collect form data (optional, for validation or backend use)
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const coverLetter = document.getElementById("coverLetter").value;
        const resume = document.getElementById("resume").files[0];

        // Show success message on the current page
        messageDiv.innerHTML = `<p style="color: green; font-weight: bold;">Thank you, ${fullName}! Your application has been submitted successfully.</p>`;

        // Optional: redirect to a success page after 2 seconds
        setTimeout(function () {
            window.location.href = "file:///C:/Users/Anith/OneDrive/Desktop/job%20portal/succes.html"; // Create this page!
        }, 2000);
    });
});

document.getElementById("applyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from actually submitting to a backend

    // Perform any necessary validation or form processing here

    // Redirect to the success page
    window.location.href = "sucessapply.html";
});
