"use strict";const parseHTML=e=>{var t=document.createElement("template");return t.innerHTML=e,t.content},data=["13 413,30000","13 545,60000","13 957,20000","15 058,50000","14 910,00000","15 878,00000","16 711,80000","16 525,10000","15 324,60000","14 909,20000","14 223,60000","13 740,10000","13 703,70000","14 266,20000","13 732,30000","13 854,30000","12 134,30000","10 624,40000","11 486,20000","11 502,40000"],startDate=new Date("03.01.2009"),formatDate=e=>`${e.getDate().toString().padStart(2,"0")}/${(e.getMonth()+1).toString().padStart(2,"0")}/`+e.getFullYear().toString().slice(-2),formatValue=e=>e?(e=e.replace(/ /g,"").replace(",",".")).slice(0,7):"";function addDays(e,t){e=new Date(e);return e.setDate(e.getDate()+t),e}const addStyles=()=>{var e=document.createElement("style");e.textContent=`
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
        color: #FFF;
      }

      .box > div {
        mix-blend-mode: difference;
        opacity: 0.2;
      }
    `,document.head.appendChild(e)},addFonts=()=>{document.head.append(parseHTML(`
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@800&display=swap" rel="stylesheet">
    `))},main=()=>{addStyles(),addFonts()};main(),window.builder=(e,n)=>{e.reduce((t,e)=>{if(Array.isArray(e)){var[a,r]=e;for(let e=0;e<r;e++)t.push(n[a])}else t.push(n[e]);return t},[]).slice(0,20).forEach((e,t)=>{var t=53*Math.floor(t/53)+t,a=t+53,r=data[t],t=addDays(startDate,t),n=addDays(startDate,a),a=null!=(a=data[a])?a:"",o=document.querySelector(".wrapper");null!=o&&o.append(parseHTML(`<div class="box" style="background: ${e}">
          <div>${formatDate(t)}<br>$${formatValue(r)}</div>
          <div>${formatDate(n)}<br>${a?"$"+formatValue(a):""}</div>
        </div>`))})};