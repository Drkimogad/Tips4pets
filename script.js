document.addEventListener("DOMContentLoaded", function () {
  // Feedback Form Submission
  document.getElementById("feedback-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Store feedback locally or show a message
    localStorage.setItem("feedback", JSON.stringify({ name, email, message }));
    alert("Thank you for your feedback!");
    
    // Clear the form
    document.getElementById("feedback-form").reset();
  });

  // Admin Login (password protection)
  const adminPassword = "admin123"; // Change password for admin access
  let isAdmin = false;

  function checkAdminAccess() {
    const enteredPassword = prompt("Enter Admin Password:");
    if (enteredPassword === adminPassword) {
      isAdmin = true;
      document.getElementById("admin-dashboard").classList.remove("hidden");
    } else {
      alert("Incorrect password");
    }
  }

  // Check admin access on page load
  checkAdminAccess();

  // Homepage content editing
  document.getElementById("edit-homepage").addEventListener("click", function () {
    document.getElementById("homepage-edit").classList.toggle("hidden");
  });

  document.getElementById("save-homepage").addEventListener("click", function () {
    const newContent = document.getElementById("homepage-content").value;
    document.querySelector("h1").textContent = newContent; // Update homepage content
    alert("Homepage content updated!");
  });
});
