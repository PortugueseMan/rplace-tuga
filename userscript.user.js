// ==UserScript==
// @name         Portugal Overlay
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Orgulho tuga!
// @author       Some anon
// @match        https://garlic-bread.reddit.com/embed*
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://i.pinimg.com/originals/bb/28/f0/bb28f08db88265208c7329474998d8a5.png
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/PortugueseMan/rplace-tuga/main/canva.png";
            i.style = "position: absolute;left: 0;top: 0px;image-rendering: pixelated;width: 500px;height: 500px";
            i.id = "mcss-overlay"
            i.setAttribute("vis",1)
            console.log(i);
            return i;
        })())

            document.getElementsByTagName("body")[0].appendChild(
        (function () {
            const i = document.createElement("button");
            i.style = "position: fixed;left: 10px; background: #fff; top: 50%;width: 50px;height: 50px;";
            i.innerHTML = "T"
            i.onclick = function() {
                const img = document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.querySelector("#mcss-overlay")
                if (img.getAttribute("vis") == "1") {
                    img.setAttribute("vis",0)
                    img.style.opacity  = 0
                } else {

                    img.setAttribute("vis",1)
                    img.style.opacity  = 1
                }
            }
            console.log(i);
            return i;
        })())

    }, false);

}
