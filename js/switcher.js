/**theme  */
const themeToggle = document.querySelector(".style-switcher-toggler");
const themeswitcher = document.querySelector(".style-switcher");

// Chargement du dernier thème enregistré
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.add(savedTheme);
}

themeToggle.addEventListener("click", () => {
  themeswitcher.classList.toggle("open");
});

/* Choix du thème */
const alternateStyles = document.querySelectorAll(".alternate-style");
const body = document.querySelector("body");

function setActiveStyle(color) {
  body.classList.remove("bleu", "rouge", "jaune", "vert", "rose");
  body.classList.add(color);
  localStorage.setItem("theme", color); // Enregistrement du thème dans localStorage
}

/** Mode sombre */
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun-o");
  dayNight.querySelector("i").classList.toggle("fa-moon-o");
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark")); // Enregistrement du mode sombre dans localStorage
});

window.addEventListener("load", () => {
  const darkMode = localStorage.getItem("darkMode") === "true";
  document.body.classList.toggle("dark", darkMode);
  if (darkMode) {
    dayNight.querySelector("i").classList.add("fa-sun-o");
    dayNight.querySelector("i").classList.remove("fa-moon-o");
  } else {
    dayNight.querySelector("i").classList.remove("fa-sun-o");
    dayNight.querySelector("i").classList.add("fa-moon-o");
  }
});
