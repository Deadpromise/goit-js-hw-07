import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');




const murkup = galleryItems.map(el => {
    const cardMarkup = `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`;
        return cardMarkup;
    }).join('');

galleryRef.innerHTML = murkup;

galleryRef.addEventListener('click', function (e) {
    e.preventDefault();
});

function getImgLink(e) {
    console.log(e.target.dataset.source);
    return e.target.dataset.source;

};

galleryRef.addEventListener('click', getImgLink);

// const galleryItemRef = document.querySelector('.gallery__item');
// console.log(galleryItemRef);

// const galleryLinkRef = document.querySelector('.gallery__link');
// console.log(galleryLinkRef);
// galleryLinkRef.addEventListener('click', onLinkClick);


// function onLinkClick(e) {
//     e.preventDefault();
//     return false;
// };

// galleryItemRef.addEventListener('click', onItemClick);

// function onItemClick(e) {
//     // e.preventDefault();
//     console.log("нажаль");
// };
