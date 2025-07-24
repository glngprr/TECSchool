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
let isAutoSliding = true;
let autoSlideInterval;
const totalSlides = 5;
let itemsPerView = 3;

document.addEventListener("DOMContentLoaded", function () {
  updateItemsPerView();
  updateCarousel();
  window.addEventListener("resize", () => {
    updateItemsPerView();
    updateCarousel(); // Perbarui posisi saat ukuran berubah
  });
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
}

function nextSlide() {
  if (currentSlide < totalSlides - itemsPerView) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateCarousel();
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = totalSlides - itemsPerView;
  }
  updateCarousel();
}

function updateCarousel() {
  const wrapper = document.getElementById("carouselWrapper");
  const slideWidth = 100 / itemsPerView;
  const offset = (slideWidth / 100) * currentSlide * -100;
  wrapper.style.transform = `translateX(${offset}%)`;
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

// footer
const socialLinks = document.querySelectorAll(".social-link");
socialLinks.forEach((link, index) => {
  link.style.animationDelay = `${index * 0.1}s`;

  link.addEventListener("mouseenter", function () {
    this.style.animation = "none";
    this.style.transform = "translateY(-3px) scale(1.1)";
  });

  link.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});
