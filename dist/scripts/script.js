/* Below is the collection of basic JavaScript functions that are used to handle the website's interactivity. 

Usually, though, I would use a JavaScript framework like React with component-based approach.
*/

// Handle background image movements--------------------------------------------
const backgroundElement = document.querySelector("#moving-bg");

const handleBackgroundMovement = (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;
  const moveX = (mouseX - 0.5) * 100; // Adjust the sensitivity of mouse movement
  const moveY = (mouseY - 0.5) * 100; // Adjust the sensitivity of mouse movement
  backgroundElement.style.backgroundPosition = `${moveX}% ${moveY}%`;
};

// Wait for the initial animation to finish before adding the mousemove event listener------------------------------------------------------------------------
setTimeout(() => {
  document.addEventListener("mousemove", handleBackgroundMovement);
}, 1000);

// Handle popup opening and closing
const popupElement = document.querySelector("#popup");
const togglePopup = () => {
  document.body.classList.toggle("popup-active");
  popupElement.classList.toggle("active");
};

// Handle navigation menu opening and closing-----------------------------------
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

// Reveal elements on page load -----------------------------------------------
const contentRevealContainerEl = document.querySelector(".reveal");
document.addEventListener("DOMContentLoaded", function () {
  contentRevealContainerEl.setAttribute("data-state", "visible");
});

// Fallback for browsers that don't support the 'mask-image' css property ------
const supportsMaskImage = CSS.supports("mask-image", "url()");

const maskImageFallback = () => {
  console.warn("Mask image not supported, falling back to canvas video mask.");

  const containerEl = document.querySelector(".hero__heading");

  // Remove the mask-group class and video element
  containerEl.classList.remove("mask-group");
  containerEl.innerHTML = "";

  // Create a canvas element and append it to the containerEl
  const canvas = document.createElement("canvas");
  canvas.width = containerEl.offsetWidth;
  canvas.height = containerEl.offsetHeight;

  containerEl.appendChild(canvas);

  // Load the mask image and video
  const maskImage = new Image();
  maskImage.src = "dist/images/Mask.png";

  const video = document.createElement("video");
  video.src = "dist/video/Mars.m4v";
  video.loop = true;
  video.muted = true;
  video.autoplay = true;
  video.load();
  video.play();

  const ctx = canvas.getContext("2d");

  // Draw the mask image and video on the canvas
  const draw = () => {
    i = window.requestAnimationFrame(draw);
    ctx.drawImage(maskImage, 0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "source-in";
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  };

  video.addEventListener("loadeddata", () => {
    draw();
  });
};

if (!supportsMaskImage) {
  maskImageFallback();
}
