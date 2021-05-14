const scroll = () => {
  window.addEventListener('scroll', () => {
    const elemTop = document.querySelector('.up');

    elemTop.addEventListener('click', () => {
      scrollTarget('body');
    });

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
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
};
export default scroll;
