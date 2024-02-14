// Handle background image movements
const backgroundElement = document.querySelector("#moving-bg");

const handleBackgroundMovement = (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;
  const moveX = (mouseX - 0.5) * 100; // Adjust the sensitivity of mouse movement
  const moveY = (mouseY - 0.5) * 100; // Adjust the sensitivity of mouse movement
  backgroundElement.style.backgroundPosition = `${moveX}% ${moveY}%`;
};

document.addEventListener("mousemove", handleBackgroundMovement);
