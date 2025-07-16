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
