// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loaderEl = document.querySelector(".loader");

const lightbox = new SimpleLightbox('.gallery a', { 
     captionsData: "alt",
});
    
export function renderGallery(images) {
    hideLoader();
    const markup = images.map(createGallery).join('');
    gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = "";
}

function createGallery(image) {
    return `
    <li class="gallery-item">
        <a href="${image.largeImageURL}">
            <img 
                class="gallery-image" 
                src="${image.webformatURL}" 
                alt="${image.tags}"
            />
        </a>
        <ul>
            <li><h3>Likes</h3><p>${image.likes}</p></li>
            <li><h3>Views</h3><p>${image.views}</p></li>
            <li><h3>Comments</h3><p>${image.comments}</p></li>
            <li><h3>Downloads</h3><p>${image.downloads}</p></li>
        </ul>
    </li>`;
}

export function showLoader() {
    loaderEl.style.display = "block";
}

export function hideLoader() {
    loaderEl.style.display = "none";
}