import{a as m,i as l,S as h}from"./assets/vendor-BJB9CV5g.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function y(t){const o="https://pixabay.com"+"/api/",e={key:"55223791-ec5d17344899da05be039ab07",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(o,{params:e}).then(r=>{const s=r.data.hits;if(s.length===0){l.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}return s}).catch(r=>{throw r})}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),p=new h(".gallery a",{captionsData:"alt"});function g(t){i();const n=t.map(L).join("");u.insertAdjacentHTML("beforeend",n),p.refresh()}function c(){u.innerHTML=""}function L(t){return`
    <li class="gallery-item">
        <a href="${t.largeImageURL}">
            <img 
                class="gallery-image" 
                src="${t.webformatURL}" 
                alt="${t.tags}"
            />
        </a>
        <ul>
            <li><h3>Likes</h3><p>${t.likes}</p></li>
            <li><h3>Views</h3><p>${t.views}</p></li>
            <li><h3>Comments</h3><p>${t.comments}</p></li>
            <li><h3>Downloads</h3><p>${t.downloads}</p></li>
        </ul>
    </li>`}function b(){d.style.display="block"}function i(){d.style.display="none"}const f={form:document.querySelector(".form")};c();document.addEventListener("DOMContentLoaded",()=>{i()});f.form.addEventListener("submit",w);function w(t){t.preventDefault();const a=new FormData(t.target).get("search-text").trim();if(!a){l.show({title:"Error",message:"Please try again!"}),c();return}b(),c(),y(a).then(o=>{i(),console.log(o),g(o)}).catch(o=>{i(),l.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}),f.form.reset()}
//# sourceMappingURL=index.js.map
