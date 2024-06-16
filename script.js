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

        
        redirectButton.style.display = 'none';

        
        customImage.onload = function() {
            redirectButton.style.display = 'inline-block';
        };
    } else {
        greetingMessage.textContent = "Your name first.";
        customImage.style.display = 'none';
        redirectButton.style.display = 'none';
    }
}

document.getElementById('redirectButton').addEventListener('click', function() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfTHkInnAtzTH_zTbiha0wF9_ai5zlq-P1tLt6KjtSwXhdEaw/viewform?usp=sf_link';
});
