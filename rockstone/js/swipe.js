`use strict`;

const areaContent = document.querySelector(`.content`);
const areaTime = document.querySelector(`.time`);

const touchArea = document.querySelectorAll(`.touch`);

let initialPoint;
let finalPoint;

// Не универсальное решение, но для конкретной задачи подойдет.
for (let i = 0; i < touchArea.length; i++) {
  touchArea[i].addEventListener('touchstart', function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    initialPoint = evt.changedTouches[0];
  }, false);
  
  touchArea[i].addEventListener('touchend', function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    finalPoint = evt.changedTouches[0];
  
    let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
  
    if (xAbs > 20) {
      if (finalPoint.pageX < initialPoint.pageX){
        areaContent.classList.add(`swipe-left-content`);
        areaTime.classList.add(`swipe-left-time`);
        areaContent.classList.remove(`swipe-right-content`);
        areaTime.classList.remove(`swipe-right-time`);
      } else{
        areaContent.classList.add(`swipe-right-content`);
        areaTime.classList.add(`swipe-right-time`);
        areaContent.classList.remove(`swipe-left-content`);
        areaTime.classList.remove(`swipe-left-time`);
      }
    }
  }, false);
}