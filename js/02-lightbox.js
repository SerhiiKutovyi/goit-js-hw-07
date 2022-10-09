//* 1 Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.

import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const refGallery = document.querySelector('.gallery');

const newItems = galleryItems
  .map(
    item =>
      `<li class="gallery__item">
    <a class="lazyload"  href="${item.original}">
    <img class="gallery__image" loading='lazy' src="${item.preview}" alt="${item.description}" />
    </a>
    </li>`
  )
  .join('');

refGallery.innerHTML = newItems;
console.log(refGallery);

/* 2. Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. 
  Необходимо добавить ссылки на два файла: 
  simple - lightbox.min.js и simple - lightbox.min.css.*/

/* 3. Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery.
 Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».*/

refGallery.addEventListener('click', openItemsClick);
function openItemsClick(event) {
  event.preventDefault();
  /*Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. 
  Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.*/
  if (event.target !== event.currentTarget) {
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
}
