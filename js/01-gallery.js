import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const listGalelery = galleryItems
  .map(({ preview, original }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image description"
    />
  </a>
</li>`;
  })
  .join("");
gallery.insertAdjacentHTML("beforeend", listGalelery);

let instance;
let modal = false;

gallery.addEventListener("click", (elem) => {
  if (elem.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(
    `<img src="${elem.target.dataset.source}" width="800" height="600">`
  );

  instance.show();
  modal = true;
  elem.preventDefault();

  closesModalWindow();
});

function closesModalWindow() {
  if (modal) {
    window.addEventListener("keydown", (key) => {
      if (key.code === "Escape") {
        instance.close();
        modal = false;
      }
    });
  }
}
