'use strict';

const toggler = document.querySelector('.toggler');
const slideTrack = document.querySelector('.slide-track');
const basic = document.querySelector('.basic');
const professional = document.querySelector('.professional');
const master = document.querySelector('.master');

const togglePlan = function () {
  toggler.classList.toggle('toggle');
  changePricing();
};

//toggler.addEventListener('click', togglePlan);
slideTrack.addEventListener('click', togglePlan);

const changePricing = function () {
  toggler.classList.contains('toggle')
    ? (basic.textContent = 199.99) &&
      (professional.textContent = 249.99) &&
      (master.textContent = 399.99)
    : (basic.textContent = 19.99) &&
      (professional.textContent = 24.99) &&
      (master.textContent = 39.99);
};

//writing changePricing function using if statement, WORKS PERFECTLY...YOU CAN UNCOMMENT AND TEST IT OUT
// const changePricing = function () {
//    // if (toggler.classList.contains('toggle')) {
//   //   basic.textContent = 199.99;
//   //   professional.textContent = 249.99;
//   //   master.textContent = 399.99;
//   // } else {
//   //   basic.textContent = 19.99;
//   //   professional.textContent = 24.99;
//   //   master.textContent = 39.99;
//   // }
// };
