const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
const imagesPerSlide = 3; // Her kaydırmada gösterilecek resim sayısı

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= imagesPerSlide;
        if (currentIndex < 0) currentIndex = 0; // Negatif indekse izin verme
    } else {
        currentIndex = Math.floor(images.length / imagesPerSlide) * imagesPerSlide; // En sona git
        if (currentIndex >= images.length) currentIndex -= imagesPerSlide; // Taşmayı önle
    }
    updateSliderPosition();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - imagesPerSlide) {
        currentIndex += imagesPerSlide;
        if (currentIndex > images.length - imagesPerSlide) currentIndex = images.length - imagesPerSlide; // Taşmayı önle
    } else {
        currentIndex = 0; // Başa dön
    }
    updateSliderPosition();
});

function updateSliderPosition() {
    const slideWidth = slider.clientWidth / imagesPerSlide;
    const newTransformValue = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${newTransformValue}px)`;
}
