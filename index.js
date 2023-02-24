'use strict';

const time = document.querySelector('.time');
// time.textContent = 'Good Evening';
const greeting = document.querySelector('.greeting');
greeting.textContent = 'Good Evening,';

const date = new Date();
const currentTime = date.toLocaleTimeString();
document.querySelector('.time').innerHTML = currentTime;

const options = { weekday: 'long', month: 'long', day: 'numeric' };
const currentDate = date.toLocaleDateString('en-Us', options);
document.querySelector('.date').innerHTML = currentDate;

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  document.querySelector('.time').innerHTML = currentTime;
  return currentTime, setTimeout(showTime, 1000);
}
showTime();

function showDate() {
  return currentDate;
}
console.log(showDate());
