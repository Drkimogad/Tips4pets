// Editable About Us
function editAboutUs() {
    const aboutText = prompt("Edit About Us Text:", document.getElementById("about-us-text").innerText);
    if (aboutText !== null) {
        document.getElementById("about-us-text").innerText = aboutText;
    }
}

// Editable Packages
function editPackages() {
    const packagesText = prompt("Edit Packages (separate by commas):", 
        Array.from(document.querySelectorAll("#packages-list li")).map(li => li.innerText).join(", "));
    if (packagesText !== null) {
        const packages = packagesText.split(",").map(p => p.trim());
        const packagesList = document.getElementById("packages-list");
        packagesList.innerHTML = ""; // Clear existing
        packages.forEach(pkg => {
            const li = document.createElement("li");
            li.innerText = pkg;
            packagesList.appendChild(li);
        });
    }
}

// Editable Email
function editEmail() {
    const email = prompt("Edit Email:", document.getElementById("email").innerText);
    if (email !== null) {
        document.getElementById("email").innerText = email;
    }
}

// Editable WhatsApp
function editWhatsApp() {
    const whatsapp = prompt("Edit WhatsApp Number:", document.getElementById("whatsapp").innerText);
    if (whatsapp !== null) {
        document.getElementById("whatsapp").innerText = whatsapp;
    }
}

// Editable Hero Section
function editHero() {
    const title = prompt("Edit Hero Title:", document.getElementById("hero-title").innerText);
    const description = prompt("Edit Hero Description:", document.getElementById("hero-description").innerText);
    const imageUrl = prompt("Enter URL for Hero Image:", document.getElementById("hero-image").src);

    if (title !== null) {
        document.getElementById("hero-title").innerText = title;
    }
    if (description !== null) {
        document.getElementById("hero-description").innerText = description;
    }
    if (imageUrl !== null) {
        document.getElementById("hero-image").src = imageUrl;
    }
}
