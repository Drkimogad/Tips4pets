// Editable Hero Section
function editHero() {
    const title = prompt("Enter a new title:", document.getElementById("hero-title").textContent);
    const description = prompt("Enter a new description:", document.getElementById("hero-description").textContent);
    const image = prompt("Enter the URL of a new image (or leave blank to keep current):");
    if (title) document.getElementById("hero-title").textContent = title;
    if (description) document.getElementById("hero-description").textContent = description;
    if (image) document.getElementById("hero-image").src = image;
}

// Edit Packages Section
function editPackages() {
    const packages = prompt("Enter packages separated by commas:", Array.from(document.querySelectorAll("#packages-list li")).map(item => item.textContent).join(", "));
    if (packages) {
        const packagesList = document.getElementById("packages-list");
        packagesList.innerHTML = "";
        packages.split(",").forEach(pkg => {
            const listItem = document.createElement("li");
            listItem.textContent = pkg.trim();
            packagesList.appendChild(listItem);
        });
    }
}

// Edit Email
function editEmail() {
    const email = prompt("Enter a new email:", document.getElementById("email").textContent);
    if (email) document.getElementById("email").textContent = email;
}

// Edit WhatsApp
function editWhatsApp() {
    const whatsapp = prompt("Enter a new WhatsApp number:", document.getElementById("whatsapp").textContent);
    if (whatsapp) document.getElementById("whatsapp").textContent = whatsapp;
}

// Edit About Us
function editAboutUs() {
    const aboutUsText = prompt("Edit the 'About Us' section:", document.getElementById("about-us-text").textContent);
    if (aboutUsText) document.getElementById("about-us-text").textContent = aboutUsText;
}
