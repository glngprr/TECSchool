const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const iconMenu = document.getElementById('iconMenu');
const iconClose = document.getElementById('iconClose');

mobileToggle.addEventListener('click', () => {
navMenu.classList.toggle('active');

const menuIsActive = navMenu.classList.contains('active');
    iconMenu.classList.toggle('hidden', menuIsActive);
    iconClose.classList.toggle('hidden', !menuIsActive);
});

// hero section
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;        

function showSlide(index) {
    // Reset all slides
    slides.forEach(slide => {
        slide.classList.remove('slide-active');
        slide.classList.add('slide-next');
    });
    // Set the new slide
    slides[index].classList.remove('slide-next');
    slides[index].classList.add('slide-active');
    currentSlide = index;
}

// Auto-slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 5000);