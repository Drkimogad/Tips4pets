document.addEventListener("DOMContentLoaded", () => {
    const isProduction = true; // Set to true for deployed version

    // Functionality to edit blocks when in non-production mode
    if (!isProduction) {
        // Event Listener for "About Us" Block Edit
        document.getElementById("about-us-text").addEventListener("click", () => {
            const aboutUsText = prompt(
                "Edit About Us",
                document.getElementById("about-us-text").textContent
            );
            if (aboutUsText !== null) {
                document.getElementById("about-us-text").textContent = aboutUsText;
            }
        });

        // Event Listener for "Packages" Block Edit
        document.getElementById("packages-list").addEventListener("click", () => {
            const packagesText = prompt(
                "Edit Packages",
                document.getElementById("packages-list").innerText
            );
            if (packagesText !== null) {
                document.getElementById("packages-list").innerText = packagesText;
            }
        });

        // Event Listener for "Contact Us" Block Edit (Email)
        document.getElementById("email").addEventListener("click", () => {
            const newEmail = prompt(
                "Edit Email",
                document.getElementById("email").textContent
            );
            if (newEmail !== null) {
                document.getElementById("email").textContent = newEmail;
            }
        });

        // Event Listener for "Contact Us" Block Edit (WhatsApp)
        document.getElementById("whatsapp").addEventListener("click", () => {
            const newWhatsApp = prompt(
                "Edit WhatsApp Number",
                document.getElementById("whatsapp").textContent
            );
            if (newWhatsApp !== null) {
                document.getElementById("whatsapp").textContent = newWhatsApp;
            }
        });
    }

    // Disable editing functionality for production mode
    if (isProduction) {
        const blocks = document.querySelectorAll(".block");
        blocks.forEach((block) => {
            block.style.cursor = "default"; // Prevent pointer feedback
            block.onclick = null; // Disable clicking for editing
        });
    }

    // Set the admin photo dynamically
    const adminPhoto = document.getElementById("admin-photo");
    adminPhoto.src =
        "https://raw.githubusercontent.com/Drkimogad/Tips4pets/main/Anni.jpg";

    // WhatsApp number and link functionality (already updated in HTML)
    const whatsappLink = document.getElementById("whatsapp-link");
    whatsappLink.href = "https://wa.me/0027813444455";
});
