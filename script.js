function displayGreeting() {
    var name = document.getElementById('nameInput').value;
    var greetingMessage = document.getElementById('greetingMessage');
    var customImage = document.getElementById('customImage');
    var images = [
        'assets/1.gif',
        'assets/2.jpg',
        'assets/3.jpg',
        'assets/4.gif',
        'assets/5.jpg',
        'assets/6.png',
        'assets/7.png',
        'assets/8.png',
        'assets/9.png',
        'assets/10.png',
        'assets/11.png',
        'assets/12.png',
        'assets/13.png',
        'assets/14.jpg',
        'assets/15.jpg',
        'assets/16.jpg',
        'assets/17.jpg',
        'assets/18.jpg',
        'assets/19.png',
        'assets/20.png',
        'assets/21.png',
        'assets/22.jpg',
        'assets/23.jpg',
        'assets/24.jpg',
        'assets/25.jpg',
        'assets/26.jpg',
        'assets/27.jpg',
        'assets/28.jpg',
        'assets/29.gif',
        'assets/30.jpg',
        'assets/31.png',
        'assets/32.png',
        'assets/33.jpeg',
        'assets/34.gif',
        'assets/35.jpg',
        'assets/36.png'
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
