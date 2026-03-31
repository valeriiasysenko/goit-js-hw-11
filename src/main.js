import { getImagesByQuery } from "./js/pixabay-api.js";
import { renderGallery, showLoader, hideLoader, clearGallery } from "./js/render-functions.js";

import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const refs = {
    form: document.querySelector(".form"),
}
clearGallery();
refs.form.addEventListener("submit", onSubmitHandler);

function onSubmitHandler(event) {
    event.preventDefault();
    const dataForm = new FormData(event.target);
    const searchText = dataForm.get("search-text").trim();
    
    if (!searchText) {
        showLoader();
        setTimeout(() => {
            hideLoader();
            iziToast.show({
            title: 'Error',
            message: 'Please try again!'
        });
        }, 1000);  
        clearGallery();
        return;
    }
    showLoader();
    getImagesByQuery(searchText).then(value => {
        clearGallery();
        setTimeout(() => {
            renderGallery(value);
            if (value.length === 0) {
                iziToast.show({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
                return;
            }
        }, 800);
    }).catch(error => {
        iziToast.show({
            title: 'Error',
            message: 'Something went wrong!'
        });
        clearGallery();
    }).finally(() => {
        setTimeout(hideLoader,900);
    });
    refs.form.reset();
}