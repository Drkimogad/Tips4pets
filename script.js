// Editable Hero Section
function editHero() {
    const title = prompt("Enter a new title:", document.getElementById("hero-title").textContent);
    const description = prompt("Enter a new description:", document.getElementById("hero-description").textContent);
    if (title) document.getElementById("hero-title").textContent = title;
    if (description) document.getElementById("hero-description").textContent = description;
}

// Editable About Section
function editAbout() {
    const description = prompt("Edit 'About Us' content:", document.getElementById("about-description").textContent);
    if (description) document.getElementById("about-description").textContent = description;
}

// Add Blog Posts
document.getElementById("add-post-btn").addEventListener("click", function () {
    const title = document.getElementById("post-title").value.trim();
    const summary = document.getElementById("post-summary").value.trim();
    if (title && summary) {
        const postContainer = document.createElement("div");
        postContainer.className = "blog-post";
        postContainer.innerHTML = `<h3>${title}</h3><p>${summary}</p>`;
        document.getElementById("posts-container").appendChild(postContainer);
        document.getElementById("post-title").value = "";
        document.getElementById("post-summary").value = "";
    } else {
        alert("Please fill in both fields.");
    }
});

// Update Gallery Items
function updateGallery(itemNumber) {
    const newDescription = prompt(`Edit description for Featured Insight #${itemNumber}:`);
    if (newDescription) {
        document.querySelector(`.gallery-item:nth-child(${itemNumber}) p`).textContent = newDescription;
    }
}
