// ==UserScript==
// @name         Portugal Overlay
// @namespace    http://tampermonkey.net/
// @version      0.2.5
// @description  Orgulho tuga!
// @author       Some anon
// @updateURL    https://github.com/PortugueseMan/rplace-tuga/raw/main/userscript.user.js
// @downloadURL  https://github.com/PortugueseMan/rplace-tuga/raw/main/userscript.user.js
// @match        https://garlic-bread.reddit.com/embed*
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://i.pinimg.com/originals/bb/28/f0/bb28f08db88265208c7329474998d8a5.png
// @grant        none
// ==/UserScript==
var overlayImage = null;
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        const canvasContainer = document.querySelector("garlic-bread-embed").shadowRoot.querySelector("div.layout").querySelector("garlic-bread-canvas").shadowRoot.querySelector("div.container");
        overlayImage = document.createElement("img");
        updateImage();
        overlayImage.style = `position: absolute;left: 0px;top: 0;image-rendering: pixelated;width: 2000px;height: 1500px;`;
        canvasContainer.appendChild(overlayImage);
    }, false);
}

function updateImage() {
    overlayImage.src = "https://raw.githubusercontent.com/PortugueseMan/rplace-tuga/main/canva.png"
}

setInterval(function () {overlayImage.src = "https://raw.githubusercontent.com/PortugueseMan/rplace-tuga/main/canva.png"}, 30000);
