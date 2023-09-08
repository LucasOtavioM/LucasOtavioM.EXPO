const stateItems = document.querySelectorAll('.state-item');
const modals = document.querySelectorAll('.modal');
const modalOverlay = document.getElementById('modal-overlay');
const closeButtons = document.querySelectorAll('.close-modal');

modals.forEach(modal => {
  modal.style.display = 'none';
});

modalOverlay.style.display = 'none';

stateItems.forEach(stateItem => {
  stateItem.addEventListener('click', () => {
    modals.forEach(modal => {
      modal.style.display = 'none';
    });

    const state = stateItem.getAttribute('data-state');
    const modalId = `disease-modal-${state}`;
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
  });
});

closeButtons.forEach(closeButton => {
  closeButton.addEventListener('click', () => {
    const state = closeButton.getAttribute('data-state');
    const modalId = `disease-modal-${state}`;
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
  });
});
