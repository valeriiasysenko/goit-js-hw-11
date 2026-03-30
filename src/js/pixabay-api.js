import axios from "axios";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

export function getImagesByQuery(query) {
    const baseUrl = "https://pixabay.com";
    const endPoint = "/api/";
    const url = baseUrl + endPoint;
    
    const params = {
        key: "55223791-ec5d17344899da05be039ab07",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    }

    return axios.get(url, { params }).then(response => {
        const hits = response.data.hits || [];

        if (hits.length === 0) {
            iziToast.show({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!'
            });  
        }  
        return  hits || [];
    }).catch(error => {
        throw error;
    });
}