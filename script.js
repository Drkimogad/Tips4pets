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

    // WhatsApp number - Allow to change dynamically
    const whatsappNumber = '1234567890'; // Default number
    const whatsappLink = document.getElementById("whatsapp-link");
    whatsappLink.href = `https://wa.me/${whatsappNumber}`;
    
    // Allow to change the WhatsApp number (could be set dynamically in your script)
    // Example: dynamically set the WhatsApp number
    function changeWhatsAppNumber(newNumber) {
        whatsappLink.href = `https://wa.me/${newNumber}`;
    }
    
    // Social Media Icons links
    const socialIcons = document.querySelectorAll('#social-icons a');
    socialIcons.forEach(icon => {
        // Add the respective social media links
        icon.href = icon.getAttribute("href"); // Links are already set in HTML
    });

    // Add edit functionality for blocks on the left side (for development only)
    const editableBlocks = document.querySelectorAll(".block");
    editableBlocks.forEach((block) => {
        block.setAttribute("contenteditable", "true");
        block.addEventListener("blur", () => {
            alert("Changes saved!");
            // Optionally save changes here, e.g., localStorage or server API
        });
    });

    // Lock content for deployed version (disable contenteditable)
    const isProduction = true; // Set this flag to `true` for production
    if (isProduction) {
        editableBlocks.forEach((block) => {
            block.setAttribute("contenteditable", "false");
            block.style.backgroundColor = "#f9f9f9"; // Optional: visually indicate locked content
        });
    }
});
