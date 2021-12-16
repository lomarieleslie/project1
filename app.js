// Declaring Variables that hold HTML elements 
const menuButton = document.querySelector(".menuButton");
const menu = document.querySelector(".menu");

// Creating event listeners so that when user clicks the menuButton, the nav menu opens and then creating a loop so that it closes when clicked again.

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  menu.classList.toggle("active");
})

document.querySelectorAll(".navItem").forEach(n => n.addEventListener("click", () => {
  menuButton.classList.remove("active");
  menu.classList.remove("active");
}))

