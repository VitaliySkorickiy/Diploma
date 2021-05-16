const modal = () => {
  const modalCallback = document.querySelector('.modal-callback'),
    modalOverlay = document.querySelector('.modal-overlay'),
    callbackBtn = document.querySelector('.callbackBtn'),
    modalClose = modalCallback.querySelector('.modal-close'),
    buttonServices = document.querySelector('.button-services'),
    servicesElements = document.querySelector('.services-elements');
  /**/

  servicesElements.addEventListener('click', (e) => {
    const target = e.target;

    if (target.matches('.btnServices')) {
      modalCallback.style.display = 'block';
      modalOverlay.style.display = 'block';
    }
  });

  const openClose = (btn, modal, background, display) => {
    btn.addEventListener('click', () => {
      modal.style.display = display;
      background.style.display = display;
    });
  };
  openClose(buttonServices, modalCallback, modalOverlay, 'block');
  openClose(callbackBtn, modalCallback, modalOverlay, 'block');
  openClose(modalClose, modalCallback, modalOverlay, 'none');
  openClose(modalOverlay, modalCallback, modalOverlay, 'none');
};
export default modal;
