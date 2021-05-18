const validForm = () => {
  const name = document.getElementById('name'),
    tel = document.getElementById('tel');

  name.addEventListener('blur', () => {
    name.value.length < 2 ? (name.value = '') : (name.value = name.value.replace(/[^а-яё]/gi, '').trim());
  });

  tel.addEventListener('blur', () => {
    tel.value.length > 7 && tel.value.length < 13
      ? (tel.value = tel.value.replace(/[^0-9\(\)\-]/g, '').trim())
      : (tel.value = '');
  });
};
export default validForm;
