document.addEventListener("DOMContentLoaded", () => {
    // Define the readOnly flag
    const readOnly = true; // Set this to true for visitors and false for admin

    // Make blocks editable or non-editable based on readOnly flag
    const blocks = document.querySelectorAll(".block");
    blocks.forEach(block => {
        if (readOnly) {
            block.setAttribute("contenteditable", "false");
        } else {
            block.setAttribute("contenteditable", "true");
            block.addEventListener("blur", () => {
                alert("Changes saved!");
                // Optionally save changes to server or localStorage here
            });
        }
    });

    // Event Listeners for editing specific fields (if readOnly is false)
    if (!readOnly) {
        document.getElementById("about-us-text").addEventListener("click", () => {
            const aboutUsText = prompt("Edit About Us", document.getElementById("about-us-text").textContent);
            if (aboutUsText !== null) {
                document.getElementById("about-us-text").textContent = aboutUsText;
            }
        });

        document.getElementById("packages-list").addEventListener("click", () => {
            const packagesText = prompt("Edit Packages", document.getElementById("packages-list").innerText);
            if (packagesText !== null) {
                document.getElementById("packages-list").innerText = packagesText;
            }
        });

        document.getElementById("email").addEventListener("click", () => {
            const newEmail = prompt("Edit Email", document.getElementById("email").textContent);
            if (newEmail !== null) {
                document.getElementById("email").textContent = newEmail;
            }
        });

        document.getElementById("whatsapp").addEventListener("click", () => {
            const newWhatsApp = prompt("Edit WhatsApp Number", document.getElementById("whatsapp").textContent);
            if (newWhatsApp !== null) {
                document.getElementById("whatsapp").textContent = newWhatsApp;
                document.getElementById("whatsapp-link").href = `https://wa.me/${newWhatsApp}`;
            }
        });
    }
});
