const form = () => {
  const form = document.querySelector('.modal-callback'),
    inputs = form.querySelectorAll('input[type="text"]'),
    modalCallback = document.querySelector('.modal-callback'),
    modalOverlay = document.querySelector('.modal-overlay');

  const message = {
    loading: 'идет отправка',
    success: 'отправлено',
    failure: 'ошибка',
  };
  const statusMessage = document.createElement('div');

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

    statusMessage.classList.add('status');
    form.appendChild(statusMessage);

    const formData = new FormData(form);

    statusMessage.textContent = message.loading;

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
          modalCallback.style.display = 'none';
          modalOverlay.style.display = 'none';
        }, 5000);
      });
  });
};
export default form;
