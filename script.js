document.addEventListener("DOMContentLoaded", () => {
    // Event Listener for "Get Started" button
    document.getElementById("learn-more-btn").addEventListener("click", () => {
        // Scroll to the "Packages" section
        document.getElementById("packages-section").scrollIntoView({ behavior: "smooth" });
    });

    // Event Listener for "Contact Us" button
    document.getElementById("contact-us-btn").addEventListener("click", () => {
        // Scroll to the contact section
        document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" });
    });

    // Dynamically set the admin photo
    const adminPhoto = document.getElementById("admin-photo");
    adminPhoto.src = "https://raw.githubusercontent.com/Drkimogad/Tips4pets/main/Anni.jpg";

    // Add edit functionality for blocks on the left side
    const editableBlocks = document.querySelectorAll(".block");
    editableBlocks.forEach((block) => {
        block.setAttribute("contenteditable", "true");
        block.addEventListener("blur", () => {
            alert("Changes saved!");
            // Optionally save changes here, e.g., localStorage or server API
        });
    });
});
