const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");
const darkOverlay = document.querySelector(".overlay");






hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});


darkOverlay.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});






if (offScreenMenu.contains ("active")) {
  
  darkOverlay.classList.toggle("active")

}

