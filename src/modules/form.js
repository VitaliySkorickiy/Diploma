const form = () => {
  const form = document.querySelector('.modal-callback'),
    inputs = form.querySelectorAll('input[type="text"]');

  const message = {
    loading: 'Загрузка...',
    success: 'Мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
  };

  const postData = (formData) => {
    return fetch('server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    form.appendChild(statusMessage);

    const formData = new FormData(form);

    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });

    postData(body)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('status network not 200');
        }
        statusMessage.textContent = message.success;
      })
      .catch((error) => {
        statusMessage.textContent = message.failure;
        console.error(error);
      })
      .finally(() => {
        inputs.forEach((input) => (input.value = ''));

        setTimeout(() => {
          statusMessage.remove();
        }, 5000);
      });
  });
};
export default form;
