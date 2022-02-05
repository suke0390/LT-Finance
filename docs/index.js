const nav__btn = document.getElementById("burger");
const mobile__menu = document.getElementById("mobile-menu");
const profile = document.getElementById("profile");
const info = document.getElementById("info");

nav__btn.addEventListener("click", () => {
  mobile__menu.classList.toggle("hidden");
});

profile.addEventListener("click", () => {
  info.classList.toggle("hidden");
});
