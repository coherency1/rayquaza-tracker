// ---------------------------------------------------------------------------
// Price provider config
// 'static'  → reads prices.json from the repo (free, update manually before a show)
// 'scrydex' → live Scrydex API (see feature/scrydex-integration branch)
// ---------------------------------------------------------------------------
const PRICE_PROVIDER = 'static';

const CARDS=[{id:"pop1-3",name:"Rayquaza",set:"POP Series 1",num:"3/17",era:"Early Era (2003–2007)",type:"base",apiId:"pop1-3"},{id:"exa-22",name:"Rayquaza",set:"EX Deoxys",num:"22/107",era:"Early Era (2003–2007)",type:"base",apiId:"exa-22"},{id:"emed-9",name:"Rayquaza",set:"EX Emerald",num:"9/106",era:"Early Era (2003–2007)",type:"base",apiId:"emed-9"},{id:"exds-13",name:"Rayquaza δ",set:"EX Delta Species",num:"13/113",era:"Early Era (2003–2007)",type:"base",apiId:"exds-13"},{id:"exhp-16",name:"Rayquaza δ (Water)",set:"EX Holon Phantoms",num:"16/110",era:"Early Era (2003–2007)",type:"base",apiId:"exhp-16"},{id:"exhp-26",name:"Rayquaza δ (Fire)",set:"EX Holon Phantoms",num:"26/110",era:"Early Era (2003–2007)",type:"base",apiId:"exhp-26"},{id:"la-14",name:"Rayquaza",set:"Legends Awakened",num:"14/146",era:"Diamond & Pearl Era",type:"base",apiId:"la-14"},{id:"col-20",name:"Rayquaza",set:"Call of Legends",num:"20/95",era:"HGSS Era",type:"base",apiId:"col-20"},{id:"dex-128",name:"Rayquaza",set:"Dragons Exalted",num:"128/124",era:"BW Era",type:"base",apiId:"dex-128"},{id:"xyp-64",name:"Rayquaza",set:"XY Black Star Promos",num:"XY64",era:"XY Era",type:"base",apiId:"xyp-XY64"},{id:"xyp-141",name:"Rayquaza",set:"XY Black Star Promos",num:"XY141",era:"XY Era",type:"base",apiId:"xyp-XY141"},{id:"sm2-106",name:"Rayquaza",set:"Guardians Rising",num:"106/145",era:"SM Era",type:"base",apiId:"sm2-106"},{id:"swshp-29",name:"Rayquaza",set:"SWSH Black Star Promos",num:"SWSH029",era:"SWSH Era",type:"base",apiId:"swshp-SWSH029"},{id:"swsh4-138",name:"Rayquaza",set:"Vivid Voltage",num:"138/185",era:"SWSH Era",type:"base",apiId:"swsh4-138"},{id:"ex2-97",name:"Rayquaza ex",set:"EX Dragon",num:"97/97",era:"Old ex Era",type:"ex-old",apiId:"ex2-97"},{id:"exa-102",name:"Rayquaza ex",set:"EX Deoxys",num:"102/107",era:"Old ex Era",type:"ex-old",apiId:"exa-102"},{id:"exdf-97",name:"Rayquaza ex δ",set:"EX Dragon Frontiers",num:"97/101",era:"Old ex Era",type:"ex-old",apiId:"exdf-97"},{id:"np-39",name:"Rayquaza ex",set:"Nintendo Black Star Promos",num:"039",era:"Old ex Era",type:"ex-old",apiId:"np-39"},{id:"exa-107",name:"Rayquaza ☆",set:"EX Deoxys",num:"107/107",era:"Old ex Era",type:"star",apiId:"exa-107"},{id:"pl3-8",name:"Rayquaza C",set:"Supreme Victors",num:"8/147",era:"Platinum Era",type:"sp",apiId:"pl3-8"},{id:"pl3-146",name:"Rayquaza C LV.X",set:"Supreme Victors",num:"146/147",era:"Platinum Era",type:"sp",apiId:"pl3-146"},{id:"ud-89",name:"Rayquaza & Deoxys LEGEND (Top)",set:"Undaunted",num:"89/90",era:"HGSS Era",type:"legend",apiId:"ud-89"},{id:"ud-90",name:"Rayquaza & Deoxys LEGEND (Bottom)",set:"Undaunted",num:"90/90",era:"HGSS Era",type:"legend",apiId:"ud-90"},{id:"dex-85",name:"Rayquaza-EX",set:"Dragons Exalted",num:"85/124",era:"BW Era",type:"ex",apiId:"dex-85"},{id:"bwp-47",name:"Rayquaza-EX",set:"BW Black Star Promos",num:"BW47",era:"BW Era",type:"ex",apiId:"bwp-BW47"},{id:"xy6-60",name:"Rayquaza-EX (Dragon)",set:"Roaring Skies",num:"60/108",era:"XY Era",type:"ex",apiId:"xy6-60"},{id:"xy6-75",name:"Rayquaza-EX (Colorless)",set:"Roaring Skies",num:"75/108",era:"XY Era",type:"ex",apiId:"xy6-75"},{id:"xyp-66",name:"Rayquaza-EX",set:"XY Black Star Promos",num:"XY66",era:"XY Era",type:"ex",apiId:"xyp-XY66"},{id:"xyp-69",name:"Shiny Rayquaza-EX",set:"XY Black Star Promos",num:"XY69",era:"XY Era",type:"ex",apiId:"xyp-XY69"},{id:"xy6-61",name:"M Rayquaza-EX (Dragon)",set:"Roaring Skies",num:"61/108",era:"XY Era",type:"mega",apiId:"xy6-61"},{id:"xy6-76",name:"M Rayquaza-EX (Colorless)",set:"Roaring Skies",num:"76/108",era:"XY Era",type:"mega",apiId:"xy6-76"},{id:"xy7-98",name:"M Rayquaza-EX (Shiny)",set:"Ancient Origins",num:"98/98",era:"XY Era",type:"mega",apiId:"xy7-98"},{id:"cel-76",name:"M Rayquaza-EX (Celebrations)",set:"Celebrations",num:"76/108",era:"SWSH Era",type:"mega",apiId:"cel-76"},{id:"sm35-56",name:"Shining Rayquaza",set:"Shining Legends",num:"56/73",era:"SM Era",type:"shining",apiId:"sm35-56"},{id:"sm7-109",name:"Rayquaza-GX",set:"Celestial Storm",num:"109/168",era:"SM Era",type:"gx",apiId:"sm7-109"},{id:"swsh7-110",name:"Rayquaza V",set:"Evolving Skies",num:"110/203",era:"SWSH Era",type:"v",apiId:"swsh7-110"},{id:"swsh7-193",name:"Rayquaza V (Full Art)",set:"Evolving Skies",num:"193/203",era:"SWSH Era",type:"v",apiId:"swsh7-193"},{id:"swshp-147",name:"Rayquaza V",set:"SWSH Black Star Promos",num:"SWSH147",era:"SWSH Era",type:"v",apiId:"swshp-SWSH147"},{id:"swsh12-100",name:"Rayquaza V",set:"Crown Zenith",num:"100/159",era:"SWSH Era",type:"v",apiId:"swsh12pt5-100"},{id:"swsh7-111",name:"Rayquaza VMAX",set:"Evolving Skies",num:"111/203",era:"SWSH Era",type:"vmax",apiId:"swsh7-111"},{id:"swsh11-tg20",name:"Rayquaza VMAX (TG)",set:"Silver Tempest",num:"TG20/TG30",era:"SWSH Era",type:"vmax",apiId:"swsh11-tg20"},{id:"swsh12-101",name:"Rayquaza VMAX",set:"Crown Zenith",num:"101/159",era:"SWSH Era",type:"vmax",apiId:"swsh12pt5-101"},{id:"swsh12-102",name:"Rayquaza VMAX (Alt Art)",set:"Crown Zenith",num:"102/159",era:"SWSH Era",type:"vmax",apiId:"swsh12pt5-102"}],TYPE_LABEL={base:"Base","ex-old":"ex (vintage)",ex:"EX",mega:"Mega EX",gx:"GX",v:"V",vmax:"VMAX",star:"Pokémon ☆",legend:"LEGEND",sp:"C / LV.X",shining:"Shining"};

let owned={},prices={},images={},activeFilter="all";

function loadState(){try{owned=JSON.parse(localStorage.getItem("rq-owned")||"{}"),prices=JSON.parse(localStorage.getItem("rq-prices")||"{}"),images=JSON.parse(localStorage.getItem("rq-images")||"{}")}catch(e){}}
function saveState(){try{localStorage.setItem("rq-owned",JSON.stringify(owned)),localStorage.setItem("rq-prices",JSON.stringify(prices)),localStorage.setItem("rq-images",JSON.stringify(images))}catch(e){}}

// ---------------------------------------------------------------------------
// Static provider — reads prices.json committed to the repo.
// To update: edit prices.json, commit, and re-deploy.
// ---------------------------------------------------------------------------
async function loadStaticPrices() {
  try {
    const res = await fetch('./prices.json');
    if (!res.ok) return null;
    return await res.json();
  } catch { return null; }
}

async function fetchAllPricesStatic() {
  const data = await loadStaticPrices();
  if (data && data.cards) {
    CARDS.forEach(c => {
      const p = data.cards[c.id];
      if (p && p.market != null) {
        prices[c.id] = { market: p.market, url: p.url || null, state: 'done' };
      } else {
        prices[c.id] = { market: null, url: p && p.url ? p.url : null, state: 'done' };
      }
    });
  } else {
    CARDS.forEach(c => { prices[c.id] = { state: 'error' }; });
  }
  saveState();
  updateStats();
  render();
}

// ---------------------------------------------------------------------------
// Live provider hook — implemented in feature/scrydex-integration.
// This stub keeps the call-site identical so the merge is a one-liner swap.
// ---------------------------------------------------------------------------
async function fetchAllPricesLive() {
  // Replaced by Scrydex implementation on feature/scrydex-integration.
  // Keeping this stub so fetchAllPrices() routes cleanly when provider is set.
  showToast('No live provider configured');
}

async function fetchAllPrices(){
  const e=document.getElementById("refresh-btn");
  e.classList.add("loading"),e.disabled=!0;
  CARDS.forEach(c=>{prices[c.id]={state:"loading"}});
  render();

  if (PRICE_PROVIDER === 'static') {
    await fetchAllPricesStatic();
  } else {
    await fetchAllPricesLive();
  }

  e.classList.remove("loading"),e.disabled=!1;
  showToast("✓ Prices updated");
}

function updatePriceEl(e,a){const t=prices[a.id];t&&"loading"!==t.state?"done"===t.state&&t.market?(e.textContent="$"+t.market.toFixed(2),e.className="price-val"):(e.textContent="N/A",e.className="price-val na"):(e.textContent="fetching…",e.className="price-val fetching")}
function toggle(e){owned[e]=!owned[e],saveState(),updateStats();const a=document.querySelector(`[data-id="${e}"]`);a&&(a.classList.toggle("owned",owned[e]),a.querySelector(".check").textContent=owned[e]?"✓":"",a.querySelector(".card-name").style.color=owned[e]?"#86efac":""),"all"!==activeFilter&&render()}
function updateStats(){const e=CARDS.length,a=CARDS.filter(e=>owned[e.id]).length,t=e?Math.round(a/e*100):0;document.getElementById("s-owned").textContent=a,document.getElementById("s-total").textContent=e,document.getElementById("s-pct").textContent=t+"%",document.getElementById("progress-bar").style.width=t+"%";let s=0,n=!1;CARDS.forEach(e=>{owned[e.id]&&prices[e.id]?.market&&(s+=prices[e.id].market,n=!0)}),document.getElementById("s-value").textContent=n?"$"+s.toFixed(2):"—"}
function setFilter(e,a){activeFilter=e,document.querySelectorAll(".f-btn").forEach(e=>e.classList.remove("active")),a.classList.add("active"),render()}
function render(){const e=document.getElementById("search").value.toLowerCase(),a=document.getElementById("grid");a.innerHTML="";const t=CARDS.filter(a=>!("owned"===activeFilter&&!owned[a.id])&&(("missing"!==activeFilter||!owned[a.id])&&!(e&&!a.name.toLowerCase().includes(e)&&!a.set.toLowerCase().includes(e)&&!a.num.toLowerCase().includes(e))));if(!t.length)return void(a.innerHTML='<div class="empty">No cards match.</div>');[...new Set(t.map(e=>e.era))].forEach(e=>{const s=t.filter(a=>a.era===e),n=document.createElement("div");n.className="era-header",n.innerHTML=`${e} <span class="era-count">${s.filter(e=>owned[e.id]).length}/${s.length}</span>`,a.appendChild(n),s.forEach(e=>{const t=prices[e.id];let s;s=t?"loading"===t.state?'<span class="price-val fetching">fetching…</span>':"done"===t.state&&t.market?`<span class="price-val">$${t.market.toFixed(2)}</span><span class="price-label">market</span>${t.url?`<a class="tcg-link" href="${t.url}" target="_blank">TCGPlayer ↗</a>`:""}`:'<span class="price-val na">N/A</span>':`<span class="price-val na">tap ↻ for prices</span>`;const n=images[e.id],i=document.createElement("div");i.className="tile"+(owned[e.id]?" owned":""),i.dataset.id=e.id,i.onclick=()=>toggle(e.id),i.innerHTML=`\n        <div class="check">${owned[e.id]?"✓":""}</div>\n        ${n?`<img class="card-img" src="${n}" alt="${e.name}" loading="lazy">`:'<div class="card-img-ph">🐉</div>'}\n        <div class="info">\n          <div class="card-name"${owned[e.id]?' style="color:#86efac"':""}>${e.name}</div>\n          <div class="card-meta">${e.set} · ${e.num}</div>\n          <span class="badge t-${e.type}">${TYPE_LABEL[e.type]||e.type}</span>\n          <div class="price-row">${s}</div>\n        </div>`,a.appendChild(i)})})}
function showToast(e){const a=document.getElementById("toast");a.textContent=e,a.classList.add("show"),setTimeout(()=>a.classList.remove("show"),2500)}

loadState(),updateStats(),render(),Object.keys(prices).length||setTimeout(fetchAllPrices,400);
