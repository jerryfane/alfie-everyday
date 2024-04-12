// main.js
import { data } from '/content/28f67cd63ce0d282da05b0565987132a046a80e238db02a9c190ec81c6a42aa0i0';

window.data = data
console.log(data)

const parseHTML = t => {
    var e = document.createElement("template");
    e.innerHTML = t;
    return e.content;
};

const startDate = new Date("03.01.2009");
const formatDate = t => `${t.getDate().toString().padStart(2, "0")}/${(t.getMonth() + 1).toString().padStart(2, "0")}/` + t.getFullYear().toString().slice(-2);

function addDays(t, e) {
    t = new Date(t);
    return t.setDate(t.getDate() + e), t;
}

const addStyles = () => {
    var t = document.createElement("style");
    t.textContent = `
        html, body { margin: 0; padding: 0; }
        body { position: relative; padding-top: 100%; }
        .wrapper { position: absolute; inset: 0; display: grid; grid-template: repeat(53, 1fr) / repeat(53, 1fr); font-size: ${(12 / 5406 * 100).toFixed(2)}vw; line-height: 1; letter-spacing: -0.07em; font-family: "JetBrains Mono", monospace; font-optical-sizing: auto; font-weight: 800; }
        .box { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: ${(7 / 12).toFixed(2)}em; color: #FFF; }
        .box > div { mix-blend-mode: difference; opacity: 0.2; }
    `;
    document.head.appendChild(t);
};

const addFonts = () => {
    document.head.append(parseHTML(`
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@800&display=swap" rel="stylesheet">
    `));
};

const main = () => {
    addStyles();
    // addFonts(); // fonts need to be inscribed
};

main();

window.builder = (t, i) => {
    t.forEach((t, e) => {
        var e = 53 * Math.floor(e / 53) + e, a = e + 53, n = data[e], e = addDays(startDate, e), o = addDays(startDate, a), a = null != (a = data[a]) ? a : "", r = document.querySelector(".wrapper");
        null != r && r.append(parseHTML(`<div class="box" style="background: ${i[t]}">
            <div>${formatDate(e)}<br>$${n}</div>
            <div>${formatDate(o)}<br>${a ? "$" + a : ""}</div>
        </div>`));
    })
};
