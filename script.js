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
