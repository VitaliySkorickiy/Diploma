const scroll = () => {
  const elemTop = document.querySelector('.up');
  if (document.documentElement.scrollTop > 600) {
    elemTop.classList.add('animated', 'fadeIn');
  }
  elemTop.addEventListener('click', () => {
    scrollTarget('body');
  });

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 600) {
      elemTop.classList.add('animated', 'fadeIn');
      elemTop.classList.remove('fadeOut');
    } else {
      elemTop.classList.add('fadeOut');
      elemTop.classList.remove('fadeIn');
    }
  });

  let links = document.querySelectorAll('[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const block = e.target.getAttribute('href');
      scrollTarget(block);
    });
  });

  const scrollTarget = (target) => {
    if (target) {
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
};
export default scroll;
