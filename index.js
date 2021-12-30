// navIcon
const navIcon = document.getElementById("navIcon");

const navMenu = document.getElementById("nav-menu");

navIcon.addEventListener("click", MobileMenu);
function MobileMenu() {
  navIcon.classList.toggle("active");
  navMenu.classList.toggle("active");
}
