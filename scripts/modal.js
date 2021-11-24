const modalOverlay = document.querySelector('.modal-overlay');
const recipes = document.querySelectorAll('.recipe');
const modalContent = document.querySelector('.content');
const closeModal = document.querySelector('.close-modal');

function createContent(image, title, author) {
  modalContent.innerText = '';

  const imageModal = document.createElement('img');
  imageModal.className = 'modal__image';
  imageModal.src = image.src;
  imageModal.alt = image.alt;

  const titleModal = document.createElement('h2');
  titleModal.className = 'modal__title';
  titleModal.textContent = title.textContent;

  const authorModal = document.createElement('p');
  authorModal.className = 'modal__author';
  authorModal.textContent = author.textContent;

  modalContent.appendChild(imageModal);
  modalContent.appendChild(titleModal);
  modalContent.appendChild(authorModal);
}

for (let recipe of recipes) {
  recipe.addEventListener('click', function() {
    modalOverlay.classList.add('active');

    const [image, title, author] = recipe.children;
    createContent(image, title, author);
  });
}

closeModal.addEventListener('click', function() {
  modalOverlay.classList.remove('active');
});
