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
let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");
const totalSlides = slides.length;

function showSlide(index) {
  // Reset all slides
  slides.forEach((slide) => {
    slide.classList.remove("slide-active");
    slide.classList.add("slide-next");
  });
  // Set the new slide
  slides[index].classList.remove("slide-next");
  slides[index].classList.add("slide-active");
  currentSlide = index;
}

// Auto-slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}, 5000);

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
