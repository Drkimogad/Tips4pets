// Example of a simple form validation
document.querySelector('.contact form').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let message = document.querySelector('textarea').value;

    if (name && email && message) {
        alert('Message sent successfully!');
        document.querySelector('.contact form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
