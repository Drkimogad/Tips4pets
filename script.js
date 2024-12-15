// Adding Blog Post Content Dynamically
const postsContainer = document.getElementById('posts-container');
const posts = [
    { title: "How to Care for Your Dog", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
    { title: "Understanding Cat Health", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { title: "Top 5 Pet Care Tips", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." }
];

posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
    `;
    postsContainer.appendChild(postElement);
});

// Customization functionality
document.getElementById('update-homepage').addEventListener('click', function() {
    // 1. Change Cover Photo
    const coverPhotoInput = document.getElementById('cover-photo');
    const heroSection = document.querySelector('.hero');
    if (coverPhotoInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            heroSection.style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(coverPhotoInput.files[0]);
    }

    // 2. Change Caption
    const captionInput = document.getElementById('caption');
    const heroCaption = document.getElementById('hero-caption');
    if (captionInput.value) {
        heroCaption.textContent = captionInput.value;
    }

    // 3. Add Custom HTML Block (e.g., Chatbot Link)
    const customHtmlInput = document.getElementById('custom-html').value;
    const customBlock = document.createElement('div');
    customBlock.innerHTML = customHtmlInput;  // Inserting the custom HTML
    document.querySelector('.hero-text').appendChild(customBlock);

    alert('Homepage updated successfully!');
});

// Smooth Scroll for "Contact Us" Menu
document.querySelector('.nav-links a[href="#contact"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
