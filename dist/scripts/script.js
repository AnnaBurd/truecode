// Handle background image movements
const backgroundElement = document.querySelector("#moving-bg");

const handleBackgroundMovement = (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;
  const moveX = (mouseX - 0.5) * 100; // Adjust the sensitivity of mouse movement
  const moveY = (mouseY - 0.5) * 100; // Adjust the sensitivity of mouse movement
  backgroundElement.style.backgroundPosition = `${moveX}% ${moveY}%`;
};

// Handle popup opening and closing
document.addEventListener("mousemove", handleBackgroundMovement);

const popupElement = document.querySelector("#popup");
const togglePopup = () => {
  document.body.classList.toggle("popup-active");
  popupElement.classList.toggle("active");
};

// Handle navigation menu opening and closing
const navMenuBtn = document.querySelector("#nav-btn");
const navMenu = document.querySelector("#nav-menu");

let navMenuOpen = false;
const toggleNavMenu = () => {
  document.body.classList.toggle("nav-active");
  navMenu.classList.toggle("active");
  navMenuOpen = !navMenuOpen;
};

navMenuBtn.addEventListener("click", toggleNavMenu);

const target = document.querySelector(".header__nav");
const handleOutsideClick = (e) => {
  const withinBoundaries = e.composedPath().includes(target);

  if (navMenuOpen && !withinBoundaries) {
    toggleNavMenu();
  }
};

document.addEventListener("click", handleOutsideClick);
