'use strict';

let showModal = document.querySelectorAll('.show-modal');
let overlay = document.querySelector('.overlay');
let closeMadalBtn = document.querySelector('.close-modal');
let modal = document.querySelector('.modal');

const closeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModal);
}
overlay.addEventListener('click', closeModal);
closeMadalBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModal();
});
