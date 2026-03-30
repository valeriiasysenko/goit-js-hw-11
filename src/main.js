import { getImagesByQuery } from "./js/pixabay-api.js";
import { renderGallery, showLoader, hideLoader, clearGallery } from "./js/render-functions.js";

import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const refs = {
    form: document.querySelector(".form"),
}

clearGallery();

document.addEventListener("DOMContentLoaded", () => {
    hideLoader();
});

refs.form.addEventListener("submit", onSubmitHandler);

function onSubmitHandler(event) {
    event.preventDefault();
    const dataForm = new FormData(event.target);
    const searchText = dataForm.get("search-text").trim();
    
    // if (!searchText) {
    //     iziToast.show({
    //         title: 'Error',
    //         message: 'Please try again!'
    //     });  
    // }
    showLoader();
    getImagesByQuery(searchText).then(value => {
        hideLoader();
        console.log(value);
        renderGallery(value);
    }).catch (error => {
        hideLoader();
        iziToast.show({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!'
        }); 
    })
    
    refs.form.reset();
}