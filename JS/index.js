const themeToggleButton = document.getElementById("theme-toggle");

// Comprobar el tema actual al cargar la página
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
  themeToggleButton.textContent = "🌞";
} else {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
  themeToggleButton.textContent = "🌙";
}

// Evento para cambiar el tema
themeToggleButton.addEventListener("click", () => {
  // Alternar entre las clases dark y light
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    themeToggleButton.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    themeToggleButton.textContent = "🌞";
    localStorage.setItem("theme", "dark");
  }
});
