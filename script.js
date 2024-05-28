function displayGreeting() {
    var name = document.getElementById('nameInput').value;
    var greetingMessage = document.getElementById('greetingMessage');
    var customImage = document.getElementById('customImage');
    var images = [
        'assets/image1.jpg',
        'assets/image2.jpg',
        'assets/image3.jpg'
    ];
    var randomImage = images[Math.floor(Math.random() * images.length)];
    
    if(name) {
        greetingMessage.textContent = "Here's what awaits you, " + name + ":";
        customImage.src = randomImage;
        customImage.style.display = 'block';
    } else {
        greetingMessage.textContent = "Your name first.";
        customImage.style.display = 'none';
    }
}
