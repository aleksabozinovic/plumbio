const burger = document.querySelector(".open--navigation--desktop");
const overlay = document.querySelector(".overlay");
const mobileNav = document.querySelector(".mobile--nav");
const nav = document.querySelector("nav");
burger.addEventListener("click", () => {
  overlay.classList.add("active");
  mobileNav.classList.add("active");
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  mobileNav.classList.remove("active");
});

///////////////////////////////////////
// Sticky navigation: Intersection Observer API

const header = document.querySelector(".first--section");
const navHeight = nav.getBoundingClientRect().height;

function scrollFunction() {
  if (
    document.body.scrollTop > navHeight ||
    document.documentElement.scrollTop > navHeight
  ) {
    nav.classList.add("sticky");
    document.querySelector(".first--section").style.paddingTop = `240px`;
  } else {
    nav.classList.remove("sticky");
    document.querySelector(".first--section").style.paddingTop = `140px`;
  }
}

window.onscroll = function () {
  scrollFunction();
};
