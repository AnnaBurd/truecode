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
