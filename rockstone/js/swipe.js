`use strict`;

(function () {
  const areaContent = document.querySelector(`.content`);
  const areaTime = document.querySelector(`.time`);

  const touchArea = document.querySelectorAll(`.touch`);

  let initialPoint;
  let finalPoint;

  const touchStartHandler = function (evt) {
    evt.stopPropagation();
    initialPoint = evt.changedTouches[0];
  };

  const touchEndHandler = function (evt) {
    evt.stopPropagation();
    finalPoint = evt.changedTouches[0];
    
    let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    
    if (xAbs > 60) {
      if (finalPoint.pageX < initialPoint.pageX){
        areaContent.classList.add(`swipe-left-content`);
        areaTime.classList.add(`swipe-left-time`);
        areaContent.classList.remove(`swipe-right-content`);
        areaTime.classList.remove(`swipe-right-time`);
      } else {
        areaContent.classList.add(`swipe-right-content`);
        areaTime.classList.add(`swipe-right-time`);
        areaContent.classList.remove(`swipe-left-content`);
        areaTime.classList.remove(`swipe-left-time`);
      }
    }
  };

  // Не универсальное решение, но для конкретной задачи подойдет.
  for (let i = 0; i < touchArea.length; i++) {
    if (touchArea[i].classList.contains(`time`)) {
      touchArea[i].addEventListener('touchstart', function (evt) {
        evt.preventDefault();
        touchStartHandler(evt);
      }, false);

      touchArea[i].addEventListener('touchend', function (evt) {
        evt.preventDefault();
        touchEndHandler(evt);
      }, false);
    } else {
      touchArea[i].addEventListener('touchstart', function (evt) {
        touchStartHandler(evt);
      }, false);

      touchArea[i].addEventListener('touchend', function (evt) {
        touchEndHandler(evt);
      }, false);
    }
  }
})();