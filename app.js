// Declaring Variables that hold HTML elements 
const menuButton = document.querySelector(".menuButton");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  menu.classList.toggle("active");
})

document.querySelectorAll(".navItem").forEach(n => n.addEventListener("click", () => {
  menuButton.classList.remove("active");
  menu.classList.remove("active");
}))

