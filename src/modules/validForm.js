const validForm = () => {
  const name = document.getElementById('name'),
    tel = document.getElementById('tel');
  console.log(tel);

  name.addEventListener('input', () => {
    name.value = name.value.replace(/[^\а-яА-ЯёЁ\ ]/g, '').trim();
  });

  tel.addEventListener('input', () => {
    tel.value = tel.value.replace(/[^0-9\+]/gi, '').trim();
  });
};
export default validForm;
