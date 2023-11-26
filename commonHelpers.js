import{a as i,S as p,i as d}from"./assets/vendor-145b7b72.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();i.defaults.headers.common["x-api-key"]="live_seZlfq3ns3OG4awqKpgrHguF1bsT8zG0vEkOs8p5QCXaskGFToJj4a6Hy3j72iT7";async function f(){return await i.get("https://api.thecatapi.com/v1/breeds").then(t=>t.data)}async function y(t){return await i.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${t}`).then(s=>s.data)}const o={loader:document.querySelector(".loader"),select:document.querySelector(".breed-select"),catInfoBox:document.querySelector(".cat-info")};let c=!0;o.select.style.display="none";o.select.addEventListener("change",h);const m=new p({select:"#single",settings:{placeholderText:"Search breeds"}}),u={title:"Error",message:"❌ Oops! Something went wrong! Try reloading the page!",position:"topCenter",color:"red"};f().then(t=>{if(!t)throw o.loader.style.display="none",new Error;const s=t.map(({id:n,name:l})=>({text:l,value:n}));m.setData([{placeholder:!0,text:""},...s]),o.loader.style.display="none",o.select.style.display="block"}).catch(t=>{console.log(t.message),o.loader.style.display="none",o.select.style.display="none",d.show(u)});function h(t){if(t.preventDefault(),o.loader.style.display="block",o.catInfoBox.innerHTML="",c){c=!1;return}const{value:s}=t.currentTarget;y(s).then(n=>{if(!n)throw o.loader.style.display="none",new Error;o.catInfoBox.insertAdjacentHTML("beforeend",g(n)),o.catInfoBox.style.display="block",o.loader.style.display="none"}).catch(n=>{console.log(n.message),o.loader.style.display="none",d.show(u)})}function g(t){const{url:s}=t[0],{description:n,name:l,temperament:e}=t[0].breeds[0];return`<img src="${s}" alt="${l} cat" width="400" height="auto"/><div class="breed-text-info"><h1>${l}</h1><p class="description">${n}</p><p><strong>Temperament:</strong> ${e}</p></div>`}
//# sourceMappingURL=commonHelpers.js.map
