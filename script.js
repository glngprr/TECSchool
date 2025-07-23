const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");
const iconMenu = document.getElementById("iconMenu");
const iconClose = document.getElementById("iconClose");

mobileToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  const menuIsActive = navMenu.classList.contains("active");
  iconMenu.classList.toggle("hidden", menuIsActive);
  iconClose.classList.toggle("hidden", !menuIsActive);
});

// hero section
let currentSlideHero = 0;
const slidesHero = document.querySelectorAll(".hero-slide");
const totalSlidesHero = slidesHero.length;

function showSlide(index) {
  // Reset all slides
  slidesHero.forEach((slide) => {
    slide.classList.remove("slide-active");
    slide.classList.add("slide-next");
  });
  // Set the new slide
  slidesHero[index].classList.remove("slide-next");
  slidesHero[index].classList.add("slide-active");
  currentSlideHero = index;
}

// Auto-slide every 5 seconds
setInterval(() => {
  currentSlideHero = (currentSlideHero + 1) % totalSlidesHero;
  showSlide(currentSlideHero);
}, 5000);

// achievement
let currentSlide = 0;
let isExpanded = false;
let isAutoSliding = true;
let autoSlideInterval;
const totalSlides = 5;
let itemsPerView = 3;

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  updateItemsPerView();
  startAutoSlide();
  updateDots();
  window.addEventListener("resize", updateItemsPerView);
});

function updateItemsPerView() {
  const width = window.innerWidth;
  if (width <= 768) {
    itemsPerView = 1;
  } else if (width <= 1024) {
    itemsPerView = 2;
  } else {
    itemsPerView = 3;
  }
  updateDots();
}

function getMaxSlides() {
  return Math.max(0, totalSlides - itemsPerView);
}

function nextSlide() {
  const maxSlides = getMaxSlides();
  if (currentSlide < maxSlides) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateCarousel();
  updateDots();
}

function prevSlide() {
  const maxSlides = getMaxSlides();
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = maxSlides;
  }
  updateCarousel();
  updateDots();
}

function goToSlide(index) {
  const maxSlides = getMaxSlides();
  currentSlide = Math.min(index, maxSlides);
  updateCarousel();
  updateDots();
}

function updateCarousel() {
  const wrapper = document.getElementById("carouselWrapper");
  const slideWidth = 100 / itemsPerView;
  wrapper.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
}

// programs section
function toggleMajor(header) {
  const majorItem = header.parentElement;
  const isActive = majorItem.classList.contains("active");

  document.querySelectorAll(".major-item").forEach((item) => {
    item.classList.remove("active");
    item.querySelector(".expand-icon")?.classList.remove("active");
  });

  if (!isActive) {
    majorItem.classList.add("active");
    majorItem.querySelector(".expand-icon")?.classList.add("active");
  }
}

// Add smooth scroll behavior and entrance animations
document.addEventListener("DOMContentLoaded", function () {
  const majorItems = document.querySelectorAll(".major-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  majorItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = `opacity 0.6s ease ${
      index * 0.1
    }s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
  });
});
