"use strict";

//CarouselProduct
let slides = document.querySelectorAll(".carousel-slide");
let currentSlide = 0;

function resetSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
}

function showSlide(n) {
  resetSlides();
  slides[n].style.display = "flex";
}

showSlide(currentSlide);

document.querySelector(".carousel-control-prev").addEventListener("click", function () {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
});

document.querySelector(".carousel-control-next").addEventListener("click", function () {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
});

//fct afficher txt (btn carouselProduct):
const carouselBtn1 = document.getElementById('carousel-btn1');
const baliseP1 = document.getElementById('p1');
const carouselBtn2 = document.getElementById('carousel-btn2');
const baliseP2 = document.getElementById('p2');
const carouselBtn3 = document.getElementById('carousel-btn3');
const baliseP3 = document.getElementById('p3');


carouselBtn1.addEventListener("click", () => {
  if(getComputedStyle(baliseP1).display != "none") {
      baliseP1.style.display = "none";
  } else {
      baliseP1.style.display = "block";
  }
});

carouselBtn2.addEventListener("click", () => {
  if(getComputedStyle(baliseP2).display != "none") {
      baliseP2.style.display = "none";
  } else {
      baliseP2.style.display = "block";
  }
});

carouselBtn3.addEventListener("click", () => {
  if(getComputedStyle(baliseP3).display != "none") {
     baliseP3.style.display = "none";
  } else {
    baliseP3.style.display = "block";
  }
});
