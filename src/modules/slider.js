const sliderTop = () => {
  const itemSlider = document.querySelectorAll('.item');

  let currentSlide = 0,
    interval;

  const sliderPlay = () => {
    itemSlider.forEach((slider) => {
      slider.style.display = 'none';
    });

    currentSlide++;

    if (currentSlide >= itemSlider.length) {
      currentSlide = 0;
    }
    itemSlider[currentSlide].style.display = 'block';
  };
  interval = setInterval(sliderPlay, 3000);
};

export default sliderTop;
