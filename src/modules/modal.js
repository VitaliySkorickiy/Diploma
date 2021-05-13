const modal = () => {
  const modalCallback = document.querySelector('.modal-callback'),
    modalOverlay = document.querySelector('.modal-overlay'),
    callbackBtn = document.querySelector('.callbackBtn'),
    modalClose = modalCallback.querySelector('.modal-close');

  const openClose = (btn, modal, background, display) => {
    btn.addEventListener('click', () => {
      modal.style.display = display;
      background.style.display = display;
    });
  };
  openClose(callbackBtn, modalCallback, modalOverlay, 'block');
  openClose(modalClose, modalCallback, modalOverlay, 'none');
  openClose(modalOverlay, modalCallback, modalOverlay, 'none');
};
export default modal;
