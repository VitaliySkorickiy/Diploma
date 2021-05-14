const accordeon = () => {
  console.log(123);

  const buttons = document.querySelectorAll('.title');

  buttons.forEach((btn) => {
    btn.addEventListener('click', function () {
      if (!this.parentElement.classList.contains('active')) {
        buttons.forEach((btn) => {
          btn.parentElement.classList.remove('active');
          btn.nextElementSibling.style.display = 'none';
        });
        this.parentElement.classList.add('active');
        this.nextElementSibling.style.display = 'block';
      }
    });
  });
};
export default accordeon;
