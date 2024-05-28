document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phrases = [
        "Have a great day, " + name + "!",
        "You're amazing, " + name + "!",
        "Stay positive, " + name + "!",
        "Keep smiling, " + name + "!",
        "You rock, " + name + "!"
    ];

    const images = [
        'assets/image1.jpg',
        'assets/image2.jpg',
        'assets/image3.jpg',
        'assets/image4.jpg',
        'assets/image5.jpg'
    ];

    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    document.getElementById('greetingText').innerText = randomPhrase;
    document.getElementById('randomImage').src = randomImage;
    document.getElementById('greeting').classList.remove('hidden');
});
