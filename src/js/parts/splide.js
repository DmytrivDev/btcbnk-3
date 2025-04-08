import { initSlider } from './splidecust';

// const elemSplide = document.querySelector('.elem');
// if (elemSplide) {
//   initSlider(elemSplide, {
//     perPage: 2,
//     breakpoints: {
//       960: {},
//       768: {},
//     },
//   });
// }

// const elemSplides = document.querySelectorAll('.elem');
// elemSplides?.forEach(container => {
//   initSlider(container, {
//     perPage: 2,
//     breakpoints: {
//       960: {},
//       768: {},
//     },
//   });
// });

let advantSliderInstance;
const advant = document.querySelector('.advant');

const advantInitSlider = () => {
  if (advant && !advantSliderInstance) {
    advantSliderInstance = initSlider(advant, {
      perPage: 2,
      gap: '1rem',
      pagination: true,
      breakpoints: {
        768: {
          perPage: 1,
        },
      },
    });
  }
};

const destroySliders = () => {
  if (advantSliderInstance) {
    advantSliderInstance.destroy();
    advantSliderInstance = null;
  }
};

const checkViewport = () => {
  advantInitSlider();
  if (window.innerWidth > 960) {
    destroySliders();
  }
};

window.addEventListener('resize', checkViewport);
document.addEventListener('DOMContentLoaded', checkViewport);
