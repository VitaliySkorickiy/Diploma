const sliderTop = () => {
  const itemSlider = document.querySelectorAll('.item');

  let currentSlide = 0,
    interval;

  const sliderPlay = () => {
    itemSlider.forEach((slider) => {
      slider.classList.remove('animated', 'fadeIn');
      slider.style.display = 'none';
    });

    currentSlide++;

    if (currentSlide >= itemSlider.length) {
      currentSlide = 0;
    }

    itemSlider[currentSlide].classList.add('animated', 'fadeIn');
    itemSlider[currentSlide].style.display = 'block';
  };

  interval = setInterval(sliderPlay, 3000);
};
export default sliderTop;
