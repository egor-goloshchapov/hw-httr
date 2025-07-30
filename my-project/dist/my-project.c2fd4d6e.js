import"./my-project.37855371.js";var e=globalThis,t={},r={},n=e.parcelRequire716c;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequire716c=n),n.register;var o=n("iNqt6");let i=document.querySelector("#search-box"),l=document.querySelector("#country-list"),a=document.querySelector("#country-info");function c(){l.innerHTML="",a.innerHTML=""}i.addEventListener("input",debounce(function(e){let t=e.target.value.trim();if(!t)return void c();(0,o.default)(t).then(e=>{c(),e.length>10?info({text:"Too many matches. Please be more specific."}):e.length>=2&&e.length<=10?renderCountryList(e):1===e.length&&function(e){let{name:t,capital:r,population:n,languages:o,flags:i}=e,l=o.map(e=>`<li>${e.name}</li>`).join("");a.innerHTML=`
    <h2>${t}</h2>
    <p><b>Capital:</b> ${r}</p>
    <p><b>Population:</b> ${n.toLocaleString()}</p>
    <p><b>Languages:</b></p>
    <ul>${l}</ul>
    <img src="${i.svg}" width="150" />
  `}(e[0])}).catch(()=>{error({text:"No countries found!"}),c()})},500));
//# sourceMappingURL=my-project.c2fd4d6e.js.map
