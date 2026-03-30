// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const div = document.querySelector(".loader");

export function createGallerys(images) {
    const markup = images.map(createGallery).join('');
    gallery.innerHTML = markup;
    const lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: "alt",
    });

    lightbox.on("shown.simplelightbox", showLoader);
    lightbox.on("close.simplelightbox", hideLoader);
    
    lightbox.refresh();

}

export function clearGallery() {
    gallery.innerHTML = "";
}

function createGallery(image) {
    return `<li class="gallery-item" ><a href="${image.largeImageURL}"><img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}"/><ul><li><h3>Likes<p>${image.likes}</p></h3></li><li><h3>Views<p>${image.views}</p></h3></li><li><h3>Comments<p>${image.comments}</p></h3></li><li><h3>Downloads<p>${image.downloads}</p></h3></li></ul></a></li>`
}

export function showLoader() {
    div.style.display = "block";
}

export function hideLoader() {
    div.style.display = "none";
}