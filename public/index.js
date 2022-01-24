const nav__btn = document.getElementById("burger");
const mobile__menu = document.getElementById("mobile-menu");

nav__btn.addEventListener("click", () => {
  mobile__menu.classList.toggle("hidden");
});
