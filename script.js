function displayGreeting() {
    var name = document.getElementById('nameInput').value;
    var greetingMessage = document.getElementById('greetingMessage');
    var customImage = document.getElementById('customImage');
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
    
    if(name) {
        greetingMessage.textContent = "Here's what awaits your baby, " + name + ":";
        customImage.src = randomImage;
        customImage.style.display = 'block';
    } else {
        greetingMessage.textContent = "Your name first.";
        customImage.style.display = 'none';
    }
}

// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Function to generate the image
    function generateImage() {
        const imageContainer = document.getElementById('image-container');
        const img = document.createElement('img');
        img.src = 'web/1.jpg'; // Replace with your actual image path or randomize
        img.alt = 'Generated Kitten Image';
        imageContainer.appendChild(img);
    }

    // Call the function to generate the image
    generateImage();
});

