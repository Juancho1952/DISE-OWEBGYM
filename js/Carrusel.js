const images = document.querySelectorAll('.slider img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// Inicia el carrusel
images[currentIndex].classList.add('active');
setInterval(showNextImage, 5000);
