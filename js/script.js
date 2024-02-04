let currentIndex = 0;
const totalSlides = document.querySelectorAll('#carousel img').length;
const carousel = document.querySelector('#carousel figure');

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function updateCarousel() {
  const translateValue = -currentIndex * 100 + '%';
  carousel.style.transform = 'translateX(' + translateValue + ')';
}