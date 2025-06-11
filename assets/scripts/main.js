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

  const needle = document.querySelector('.needle');
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = scrollY / docHeight;

  const angle = scrollPercent * 360; //Cercle complet
  needle.style.transform = `rotate(${angle}deg)`;

  //Devient vert après 80% de la page
  if (scrollPercent > 0.8) {
    needle.style.background = 'green';
  } else {
    needle.style.background = 'grey';
  }
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

