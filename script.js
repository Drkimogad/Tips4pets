document.addEventListener("DOMContentLoaded", () => {
    // Event Listeners for buttons
    document.getElementById("learn-more-btn").addEventListener("click", () => {
        alert("Redirecting to Get Started section!");
        // Add your redirection logic here, e.g., scroll to another part of the page
    });

    document.getElementById("contact-us-btn").addEventListener("click", () => {
        alert("Redirecting to Contact Us section!");
        // Add your redirection logic here, e.g., scroll to another part of the page
    });

    // Dynamically set the admin photo
    const adminPhoto = document.getElementById("admin-photo");
    adminPhoto.src = "https://raw.githubusercontent.com/Drkimogad/Tips4pets/main/Anni.jpg";
});
