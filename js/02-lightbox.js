import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const listGalelery = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
  })
  .join("");
gallery.insertAdjacentHTML("beforeend", listGalelery);

var lightbox = new SimpleLightbox(".gallery a", {
  //   captionType: "alt",
  captionsData: "alt",
  captionDelay: 250,
});
