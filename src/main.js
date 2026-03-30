
import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallerys, showLoader,hideLoader } from "./js/render-functions.js";


const refs = {
    form: document.querySelector(".form"),
}


document.addEventListener("DOMContentLoaded", hideLoader());
refs.form.addEventListener("submit", onSubmitHandler);

function onSubmitHandler(event) {
    event.preventDefault();
    const dataForm = new FormData(event.target);
    const searchText = dataForm.get("search-text").trim() || undefined;
    console.log(searchText);
    showLoader();

    getImagesByQuery(searchText).then(value => {
        hideLoader();
        console.log(value);
        createGallerys(value);
    })

    refs.form.reset();
}