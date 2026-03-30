
import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallerys, showLoader, hideLoader , clearGallery} from "./js/render-functions.js";


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
    console.log(searchText);
    if (!searchText) {
        iziToast.show({
            title: 'Error',
            message: 'Please try again!'
        });  
    }

    showLoader();

    getImagesByQuery(searchText).then(value => {
        hideLoader();
        console.log(value);
        createGallerys(value);
    }).catch (error => {
        hideLoader();  
    })

    refs.form.reset();
}