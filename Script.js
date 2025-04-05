const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");
const darkOverlay = document.querySelector(".overlay");

// open off screen menu and make menu close upon clicking overlay

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  darkOverlay.classList.toggle("active");
});

// toggles overlay

darkOverlay.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

if (offScreenMenu.contains("active")) {
  darkOverlay.classList.remove("active");
}
