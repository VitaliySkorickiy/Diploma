import sliderTop from './modules/slider';
import modal from './modules/modal';
import scroll from './modules/scroll';
import accordeon from './modules/accordeon';
import sliderCarousel from './modules/sliderCarousel';
import form from './modules/form';

window.addEventListener('DOMContentLoaded', () => {
  // *****  Modal  ********
  modal();

  // *** Slider ***
  sliderTop();

  // *****   Scroll   *******
  scroll();

  // *****  accordeon *****
  accordeon();

  // ***** sliderCarousel   ****
  sliderCarousel();

  // *********   form  ******
  form();
});
