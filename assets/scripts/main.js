"use strict";

//NavBar
//Sticky Nav :
$(window).scroll(function(){

   let scroll = $(this).scrollTop();

   if(scroll > 200){
     $("nav").addClass('sticky');
   } else {
     $("nav").removeClass('sticky');
   }
});
///////////////////////////////  END /////////////////////////

//Zone de progression : 
window.addEventListener('scroll', () => {
  const circle = document.getElementById('scroll-indicator');
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  const color = scrollPercent > 80 ? 'green' : 'gray';

  circle.style.background = `conic-gradient(${color} ${scrollPercent}%, transparent 0%)`;
});


///////////////////////////////  END /////////////////////////

//Footer map:
//Create map:
const centroid = [37.0662, 15.2843];
const map = L.map('mapid').setView(centroid, 16.4);

//Add tiles & marker:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([50.709925, 4.352603]).addTo(map);
////////////////////////////////////////////
//Fonction de substitution à target _blank:
function openLink (event) {
    const link = "https://booking.optios.net/19311";
    window.open(link, "https://soinsdesoie.be", "_self");
    event.preventDefault();
}

