import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const refGallery = document.querySelector('.gallery');

const newItems = galleryItems
  .map(
    item =>
      `<div class="gallery__item">
    <a class="gallery__link" href='${item.original}'>
    <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
    />
    </a>
    </div>`
  )
  .join('');

refGallery.insertAdjacentHTML('afterbegin', newItems);

refGallery.addEventListener('click', openItemsClick);

function openItemsClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  refGallery.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}
