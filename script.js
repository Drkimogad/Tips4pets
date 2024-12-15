document.addEventListener("DOMContentLoaded", function () {
    // Check if admin is authenticated (for simple demo, using localStorage)
    const adminPassword = "admin123"; // set your admin password
    const enteredPassword = localStorage.getItem("adminPassword");

    if (enteredPassword === adminPassword) {
        document.getElementById("admin-dashboard").style.display = "block"; // show admin dashboard
    }

    // Form submission to save homepage settings
    document.getElementById("settings-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const newTitle = document.getElementById("new-title").value;
        const heroTitle = document.getElementById("hero-title").value;
        const heroDescription = document.getElementById("hero-description").value;

        // Save data to localStorage
        localStorage.setItem("siteTitle", newTitle);
        localStorage.setItem("heroTitle", heroTitle);
        localStorage.setItem("heroDescription", heroDescription);

        // Update homepage dynamically
        document.getElementById("site-title").textContent = newTitle || "My Website";
        document.getElementById("hero-title").textContent = heroTitle || "Welcome to My Website";
        document.getElementById("hero-description").textContent = heroDescription || "This is a simple hero section with a call to action.";

        alert("Settings updated successfully!");
    });

    // Handle navigation toggle
    document.getElementById("nav-toggle").addEventListener("click", function () {
        document.getElementById("nav-menu").classList.toggle("hidden");
    });
});
