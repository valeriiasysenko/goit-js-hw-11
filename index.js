import{a as d,i as l,S as h}from"./assets/vendor-BJB9CV5g.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();function g(r){const s="https://pixabay.com"+"/api/",t={key:"55223791-ec5d17344899da05be039ab07",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(s,{params:t}).then(e=>{const a=e.data.hits;return console.log(e.data),a||[]}).catch(e=>{throw console.log(e),l.show({title:"Error",message:e.message}),e})}const m=document.querySelector(".gallery"),u=document.querySelector(".js-loader"),p=new h(".gallery a",{captionsData:"alt"});function y(r){const o=r.map(w).join("");m.insertAdjacentHTML("beforeend",o),p.refresh()}function n(){m.innerHTML=""}function w(r){return`
    <li class="gallery-item">
        <a href="${r.largeImageURL}">
            <img 
                class="gallery-image" 
                src="${r.webformatURL}" 
                alt="${r.tags}"
            />
        </a>
        <ul class="list-info">
            <li class="item-info"><h3 class="item-title">Likes</h3><p class="item-text">${r.likes}</p></li>
            <li class="item-info"><h3 class="item-title">Views</h3><p class="item-text">${r.views}</p></li>
            <li class="item-info"><h3 class="item-title">Comments</h3><p class="item-text">${r.comments}</p></li>
            <li class="item-info"><h3 class="item-title">Downloads</h3><p class="item-text">${r.downloads}</p></li>
        </ul>   
    </li>`}function L(){u.classList.add("loader")}function c(){u.classList.remove("loader")}const f={form:document.querySelector(".form")};n();f.form.addEventListener("submit",b);function b(r){r.preventDefault();const i=new FormData(r.target).get("search-text").trim();if(L(),!i){l.show({title:"Error",message:"Please try again!"}),n(),c();return}n(),g(i).then(s=>{if(s.length===0){l.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(s)}).catch(s=>{l.show({title:"Error",message:"Something went wrong!"})}).finally(()=>{c()}),f.form.reset()}
//# sourceMappingURL=index.js.map
