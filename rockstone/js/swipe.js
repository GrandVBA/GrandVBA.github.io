`use strict`;

const areaMessage = document.querySelector(`.message`);
const areaTime = document.querySelector(`.time`);

let initialPoint;
let finalPoint;

document.addEventListener('touchstart', function(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  initialPoint = evt.changedTouches[0];
}, false);

document.addEventListener('touchend', function(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  finalPoint = evt.changedTouches[0];

  let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);

  if (xAbs > 20) {
    if (finalPoint.pageX < initialPoint.pageX){
      areaMessage.classList.add(`swipe-left-message`);
      areaTime.classList.add(`swipe-left-time`);
      areaMessage.classList.remove(`swipe-right-message`);
      areaTime.classList.remove(`swipe-right-time`);
    } else{
      areaMessage.classList.add(`swipe-right-message`);
      areaTime.classList.add(`swipe-right-time`);
      areaMessage.classList.remove(`swipe-left-message`);
      areaTime.classList.remove(`swipe-left-time`);
    }
  }
}, false);