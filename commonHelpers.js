import{a as d,S as f,i as u}from"./assets/vendor-145b7b72.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();d.defaults.headers.common["x-api-key"]="live_seZlfq3ns3OG4awqKpgrHguF1bsT8zG0vEkOs8p5QCXaskGFToJj4a6Hy3j72iT7";async function m(){return await d.get("https://api.thecatapi.com/v1/breeds").then(e=>e.data)}async function p(e){return await d.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`).then(n=>n.data)}const r={loader:document.querySelector(".loader"),select:document.querySelector(".breed-select"),catInfoBox:document.querySelector(".cat-info")};let l=!0,c;r.select.addEventListener("change",g);const h={title:"Error",message:"❌ Oops! Something went wrong! Try reloading the page!",position:"topCenter",color:"red"};m().then(e=>{if(!e)throw r.loader.classList.add("is-hidden"),r.select.classList.add("is-hidden"),new Error;const n=e.map(({id:s,name:a})=>({text:a,value:s}));c=new f({select:"#single",settings:{placeholderText:"Search breeds",onChange:s=>{L(s)}}}),c.setData([{placeholder:!0,text:""},...n]),r.loader.classList.add("is-hidden"),r.select.classList.remove("is-hidden")}).catch(e=>{console.log(e.message),r.loader.classList.add("is-hidden"),r.select.classList.add("is-hidden"),u.show(h)});function g(e){if(e.preventDefault(),r.loader.classList.remove("is-hidden"),r.catInfoBox.innerHTML="",l){l=!1;return}const{value:n}=e.currentTarget;p(n).then(s=>{if(!s)throw r.loader.classList.add("is-hidden"),new Error;r.catInfoBox.insertAdjacentHTML("beforeend",y(s)),r.catInfoBox.classList.remove("is-hidden"),r.loader.classList.add("is-hidden")}).catch(s=>{console.log(s.message),r.loader.classList.add("is-hidden"),u.show(h)})}function y(e){const{url:n}=e[0],{description:s,name:a,temperament:t}=e[0].breeds[0];return`<img src="${n}" alt="${a} cat" width="400" height="auto"/><div class="breed-text-info"><h1>${a}</h1><p class="description">${s}</p><p><strong>Temperament:</strong> ${t}</p></div>`}function L(e){const n=e.value(),s=c.data.data.find(a=>a.value===n);s&&s.element.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
