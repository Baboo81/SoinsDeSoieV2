"use strict";

//Animation balls:
const ball = document.getElementById('ball1');
let leftPos = 0;
let upDownPos = 0;
let dir = -1;
let current_rotation = 0; 

ball.style.position = "absolute";

function ballAnimate1 () {

    if (leftPos == 900) {
        dir = 1
    } else if 
        (leftPos == -100) {
        dir = -1
    }
    
    leftPos += -2 * dir;
    current_rotation += 1;
    

    ball.style.left = `${leftPos}px`;
    ball.style.transform = 'rotate('  + current_rotation + 'deg)';

    requestAnimationFrame(ballAnimate1);
};

function ballAnimate2 () {

      if (upDownPos == 900) {
        dir = 1
      } else if 
         (upDownPos == -100) {
        dir = -1
      }

      upDownPos += -2 * dir;
      current_rotation += 1;


      ball.style.top = `${upDownPos}px`;
      ball.style.transform = 'rotate(' + current_rotation + 'deg)';

      requestAnimationFrame(ballAnimate2);
   
};

function getRandom () {

      return Math.floor(Math.random(ballAnimate1, ballAnimate2));
};

requestAnimationFrame(ballAnimate1);
requestAnimationFrame(ballAnimate2);
getRandom();



