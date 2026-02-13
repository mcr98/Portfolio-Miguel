const toggle = document.querySelector(".switch input");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
});

// hamburguer button
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbar = document.querySelector(".navbar");
hamburgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("open");
});
