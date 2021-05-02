`use strict`;

const clock = document.querySelector('.clock');
 
const getTime = function () {
  const time = new Date().toTimeString().replace(/ .*/, '');
  return time;
};

const showTime = function () {
  setInterval( () => clock.innerHTML = getTime(), 1000);
};

showTime();