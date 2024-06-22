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


// Trigger CSS Animations when elements are scrolled into view

// This JS uses the Intersection Observer API to determine if objects are within the viewport
// It addes an 'in-view' class to elements when they come into view (and removes the class when not on screen)
// Use to add @keyframe or transition animations to elements so they animate once they are on screen

//TO USE
// Simply add the .animate class to those HTML elements that you wish to animate. For example, <h1 class="animate">
// Once in the viewport, the JS will add the 'in-view' class to those elements. For example, <h1 class="animate in-view">
// Define your CSS to enable animations once that element is in view. For example, h1.in-view { }

//Check if the document is loaded (so that this script can be placed in the <head>)
document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
		  return;
		}
		entry.target.classList.remove('in-view');
	  });
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.animate');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

});

const showPopup = document.querySelector('.show-popup');
const popupContainer = document.querySelector('.popup-container');
const closeBtn = document.querySelector('.close-btn');
showPopup.onclick = () => {
    popupContainer.classList.add('active');
}
closeBtn.onclick = () => {
    popupContainer.classList.remove('active');
}