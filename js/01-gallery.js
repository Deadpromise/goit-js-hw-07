import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
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



function onImgClick(e) {
    // console.log(e.target.dataset.source);
 
    e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
    }
 
  createModal(e);

};

function createModal(e) {
      const bigImgRef = e.target.dataset.source;
    basicLightbox.create(`
		<img width="1280" height="853" src="${bigImgRef}">
	`).show();

};

galleryRef.addEventListener('click', onImgClick);






      



// window.addEventListener('keydown', onEscPress);


