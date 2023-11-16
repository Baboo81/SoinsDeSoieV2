"use strict";

//Card content collapse:
const togg = document.getElementById('togg');
const togg2 = document.getElementById('togg2');
const content = document.getElementById('cardContent');
const content2 = document.getElementById('cardContent2');


togg.addEventListener("click", () => {
    if(getComputedStyle(content).display != "none") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
});

togg2.addEventListener("click", () => {
    if(getComputedStyle(content2).display != "none") {
        content2.style.display = "none";
    } else {
        content2.style.display = "block";
    }
});


function collapsed () {
    if(getComputedStyle(content).display != "none") {
        content.style.display = "none";
        content2.style.display = "none";
  }
};

collapsed();