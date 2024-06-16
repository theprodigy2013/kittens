function displayGreeting() {
    var name = document.getElementById('nameInput').value;
    var greetingMessage = document.getElementById('greetingMessage');
    var customImage = document.getElementById('customImage');
    var redirectButton = document.getElementById('redirectButton');
    var images = [
        'web/1.jpg',
        'web/2.jpg',
        'web/3.jpg',
        'web/4.jpg',
        'web/5.jpg',
        'web/6.jpg',
        'web/8.jpg',
        'web/9.jpg'
    ];
    var randomImage = images[Math.floor(Math.random() * images.length)];
    
    if (name) {
        greetingMessage.textContent = "Here's what awaits your baby, " + name + ":";
        customImage.src = randomImage;
        customImage.style.display = 'block';

        // Once the image is loaded, show the button
        customImage.onload = function() {
            redirectButton.style.display = 'inline-block';
        };
    } else {
        greetingMessage.textContent = "Your name first.";
        customImage.style.display = 'none';
        redirectButton.style.display = 'none';
    }
}

// Add an event listener to the button to redirect to the Google Form
document.getElementById('redirectButton').addEventListener('click', function() {
    window.location.href = 'https://docs.google.com/forms/d/your_custom_form_id'; // Replace with your Google Form URL
});
