function displayGreeting() {
    var name = document.getElementById('nameInput').value;
    var greetingMessage = document.getElementById('greetingMessage');
    var customImage = document.getElementById('customImage');
    var images = [
        'assets/1.jpg',
        'assets/2.jpg',
        'assets/3.jpg',
        'assets/4.jpg',
        'assets/5.jpg',
        'assets/6.jpg',
        'assets/7.jpg',
        'assets/8.jpg',
        'assets/9.jpg',
        'assets/10.jpg',
        'assets/11.jpg',
        'assets/12.jpg',
        'assets/13.jpg',
        'assets/14.jpg',
        'assets/15.jpg',
        'assets/16.jpg',
        'assets/17.jpg',
        'assets/18.jpg',
        'assets/19.jpg',
        'assets/20.jpg',
        'assets/21.jpg',
        'assets/22.jpg',
        'assets/23.jpg',
        'assets/24.jpg',
        'assets/25.jpg',
        'assets/26.jpg',
        'assets/27.jpg',
        'assets/28.jpg',
        'assets/29.jpg',
        'assets/30.jpg',
        'assets/31.jpg',
        'assets/32.jpg',
        'assets/33.jpg',
        'assets/34.jpg',
        'assets/35.jpg',
        'assets/36.jpg'
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
