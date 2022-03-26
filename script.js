const hamburger = document.querySelector(".hamburger svg");
const close = document.querySelector(".close svg");
const sideBar = document.querySelector(".side-bar");
const leftSlider = document.querySelector(".left-slider");
const rightSlider = document.querySelector(".right-slider");
const showcaseMobile = document.querySelector(".showcase-mobile");
const featured = document.querySelector(".featured");
hamburger.addEventListener("click", () => {
  sideBar.style.clipPath = " circle(120% at 100% 50%)";
});
close.addEventListener("click", () => {
  sideBar.style.clipPath = "circle(0% at 100% 50%)";
});
leftSlider.addEventListener("click", () => {
  showcaseMobile.style.backgroundImage = "url('./assets/guitar-3.jpg')";
});
rightSlider.addEventListener("click", () => {
  showcaseMobile.style.backgroundImage = "url('./assets/guitar-2.jpg')";
});
featured.addEventListener("mouseover", () => {
  featured.style.backgroundImage = "url('./assets/white-guitar.jpg')";
});
featured.addEventListener("mouseout", () => {
  featured.style.backgroundImage = "url('./assets/yellow-guitar.jpg')";
});
