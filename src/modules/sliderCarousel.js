const sliderCarousel = () => {
  const slides = document.querySelectorAll('.slides'),
    slidesWrap = document.querySelector('.services-elements'),
    next = document.querySelector('.arrow-right'),
    prev = document.querySelector('.arrow-left'),
    slidesField = slidesWrap.querySelector('.services-carousel'),
    width = window.getComputedStyle(slidesWrap).width;

  let slideIndex = 1,
    offset = 0;

  slidesField.style.width = 200 + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';

  slidesWrap.style.overflow = 'hidden';

  slides.forEach((slid) => {
    slid.style.width = width;
  });

  next.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length - 2)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
  });

  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
  });
};
export default sliderCarousel;
