const burger = document.querySelector(".open--navigation--desktop");
const overlay = document.querySelector(".overlay");
const mobileNav = document.querySelector(".mobile--nav");

burger.addEventListener("click", () => {
  overlay.classList.add("active");
  mobileNav.classList.add("active");
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  mobileNav.classList.remove("active");
});
