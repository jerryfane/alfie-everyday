


const ord = new OrdJS(''); 
const parentInscriptionId = '';
const children = await ord.getChildren(parentInscriptionId);

if (children.ids && children.ids.length > 0) {
  const lastChildId = children.ids[children.ids.length - 1];
  const dataUrl = `/content/${lastChildId}.js`; // Ensure the URL points to a .js file

  console.log(dataUrl)

  try {
    const module = await import(dataUrl);
    const data = module.data;





    const parseHTML = t => {
          var e = document.createElement("template");
          return e.innerHTML = t, e.content;
      },
      startDate = new Date("03.01.2009"),
      formatDate = t => `${t.getDate().toString().padStart(2,"0")}/${(t.getMonth()+1).toString().padStart(2,"0")}/` + t.getFullYear().toString().slice(-2),
      formatValue = t => t ? (t = t.replace(/ /g, "").replace(",", ".")).slice(0, 7) : "",
      addDays = (t, e) => {
          t = new Date(t);
          return t.setDate(t.getDate() + e), t;
      },
      addStyles = () => {
          var t = document.createElement("style");
          t.textContent = `
    html,
    body {
    margin: 0;
    padding: 0;
    }
    body {
    position: relative;
    padding-top: 100%;
    }
    .wrapper {
    position: absolute;
    inset: 0;
    display: grid;
    grid-template: repeat(53, 1fr) / repeat(53, 1fr);
    font-size: ${(12/5406*100).toFixed(2)}vw;
    line-height: 1;
    letter-spacing: -0.07em;
    font-family: "JetBrains Mono", monospace;
    font-optical-sizing: auto;
    font-weight: 800;
    }
    .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${(7/12).toFixed(2)}em;
    }
    .box > div {
    opacity: 0.2;
    }
      `;
      document.head.appendChild(t);
      },
      addFonts = () => {
          document.head.append(parseHTML(`
    <style>
    @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(/content/0178e979782dde2ee885a156f2c25f29872b020670e7a39887629dc8c2fbaec1i0) format('woff2');
    }
    </style>
        `));
      },
      pickTextColor = t => {
          t = "#" === t.charAt(0) ? t.slice(1, 7) : t, t = [parseInt(t.substring(0, 2), 16) / 255, parseInt(t.substring(2, 4), 16) / 255, parseInt(t.substring(4, 6), 16) / 255].map(t => t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4));
          return .179 < .2126 * t[0] + .7152 * t[1] + .0722 * t[2] ? "#000" : "#FFF";
      };

    function loadScript(url, isModule = false) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = isModule ? 'module' : 'text/javascript';
        script.src = url;
        script.async = true;
        script.onload = () => {
          console.log('Script loaded successfully:', url);
          resolve();
        };
        script.onerror = () => {
          console.error('Script failed to load:', url);
          reject();
        };
        document.head.appendChild(script);
      });
    }

    loadScript('/content/3280180e7872eaef3cae589f3122f2f9527d3c1c30445cb13fc6eef03435aa66i0')
      .then(() => {
        console.log('External script has been loaded and is now ready to use!');
        main(); // Only call main if script is loaded
      })
      .catch(error => {
        console.error('Error loading the script:', error);
      });

    // Main function to initialize fonts and styles
    function main() {
        addFonts(), addStyles();
    }

    // Additional logic here
    window.builder = (e, a, t) => {
      const r = [];
      if (0 === t)
          for (let t = 0; t < e.length; t += 2) {
              var n = a[e[t]],
                  o = e[t + 1];
              r.push(...Array(o).fill(n));
          } else e.forEach(t => {
              r.push(a[t]);
          });
      r.forEach((t, e) => {
          var e = 53 * Math.floor(e / 53) + e,
              a = e + 53,
              r = data[e],
              e = addDays(startDate, e),
              n = addDays(startDate, a),
              a = null != (a = data[a]) ? a : "",
              o = document.querySelector(".wrapper");
          null != o && o.append(parseHTML(`<div class="box" style="background: ${t}; color: ${pickTextColor(t)}">
            <div>${formatDate(e)}<br>$${formatValue(r)}</div>
            <div>${formatDate(n)}<br>${a?"$"+formatValue(a):""}</div>
          </div>`));
      });
    };


} catch (error) {
  console.error("Failed to load module:", error);
}
} else {
throw new Error("Children array is empty or not available.");
};
