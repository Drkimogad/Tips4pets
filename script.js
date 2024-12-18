document.addEventListener("DOMContentLoaded", () => {
    // Event Listener for "About Us" Block Edit
    document.getElementById("about-us-text").addEventListener("click", () => {
        const aboutUsText = prompt("Edit About Us", document.getElementById("about-us-text").textContent);
        if (aboutUsText !== null) {
            document.getElementById("about-us-text").textContent = aboutUsText;
        }
    });

    // Event Listener for "Packages" Block Edit
    document.getElementById("packages-list").addEventListener("click", () => {
        const packagesText = prompt("Edit Packages", document.getElementById("packages-list").innerText);
        if (packagesText !== null) {
            document.getElementById("packages-list").innerText = packagesText;
        }
    });

    // Event Listener for "Contact Us" Block Edit
    document.getElementById("email").addEventListener("click", () => {
        const newEmail = prompt("Edit Email", document.getElementById("email").textContent);
        if (newEmail !== null) {
            document.getElementById("email").textContent = newEmail;
        }
    });

    document.getElementById("whatsapp").addEventListener("click", () => {
        const newWhatsApp = prompt("0027813444455", document.getElementById("whatsapp").textContent);
        if (newWhatsApp !== null) {
            document.getElementById("whatsapp").textContent = 0027813444455;
        }
    });

    // Dynamically set the admin photo
    const adminPhoto = document.getElementById("admin-photo");
    adminPhoto.src = "https://raw.githubusercontent.com/Drkimogad/Tips4pets/main/Anni.jpg";
});

// Lock content for deployed version (disable contenteditable)
const isProduction = false; // Set this flag to `true` for production
if (isProduction) {
    editableBlocks.forEach((block) => {
        block.setAttribute("contenteditable", "false");
        block.style.backgroundColor = "#f9f9f9"; // Optional: visually indicate locked content
    });
}
