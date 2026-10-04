(function(){
const D=window.EMS_DATA,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
document.documentElement.classList.add("js");
const page=location.pathname.split("/").pop()||"index.html";
const links=[["index.html","Accueil"],["index.html#mission","L'EMS"],["index.html#formations","Formations"],["admission.html","Admission"],["histoire.html","Histoire"],["contact.html","Contact"]];
const hdr=$("#site-header");
if(hdr)hdr.outerHTML=`<div class="top"><div class="wrap"><span>Forces armées sénégalaises</span><span>École Militaire de Santé Général Jean Alfred Diallo</span></div></div>
<header class="site" id="hd"><div class="wrap bar"><a class="brand" href="index.html"><img class="logo" src="assets/images/aems-logo.jpg" alt="Logo de l'École Militaire de Santé"><span>École Militaire de Santé<small>Général Jean Alfred Diallo, Dakar</small></span></a>
<button class="burger" aria-expanded="false" aria-controls="nav">Menu</button>
<nav id="nav" aria-label="Navigation principale"><ul>${links.map(([h,t])=>`<li><a href="${h}"${h===page?' aria-current="page"':""}>${t}</a></li>`).join("")}</ul></nav></div></header>`;
const ftr=$("#site-footer");
if(ftr)ftr.outerHTML=`<footer><div class="wrap"><div class="cols"><div><a class="flogo" href="index.html"><img src="assets/images/aems-logo.jpg" alt="Logo de l\'École Militaire de Santé"></a><h3>École Militaire de Santé</h3><p>« Partout et toujours au service des Hommes »</p><p>Camp Dial Diop, Avenue des Jambaars<br>BP 6095, Dakar, Sénégal</p></div>
<div><h3>Navigation</h3><ul>${links.map(([h,t])=>`<li><a href="${h}">${t}</a></li>`).join("")}</ul></div>
<div><h3>Formations</h3><ul>${D.formations.map(f=>`<li><a href="index.html#formations">${f.nom}</a></li>`).join("")}</ul></div>
<div><h3>Liens officiels</h3><ul><li><a href="https://www.ecolemilitairesante.com/">Site de l'EMS</a></li><li><a href="https://forcesarmees.gouv.sn/">Ministère des Forces Armées</a></li><li><a href="https://formations.armee.sn/">Portail des formations</a></li><li><a href="https://aems.sn/">AEMS</a></li></ul></div></div>
<p class="legal">© École Militaire de Santé. Projet de site : mentions légales à compléter par l'institution.</p></div></footer>`;
const hd=$("#hd"),b=$(".burger"),nav=$("#nav");
if(hd){addEventListener("scroll",()=>hd.classList.toggle("s",scrollY>20),{passive:true});
b.onclick=()=>{const o=nav.classList.toggle("open");b.setAttribute("aria-expanded",o)};
nav.onclick=e=>{if(e.target.tagName==="A"){nav.classList.remove("open");b.setAttribute("aria-expanded","false")}};
addEventListener("keydown",e=>{if(e.key==="Escape")nav.classList.remove("open")})}
const rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add("in");
const c=$("[data-count]",e.target);
if(c&&!rm){const t=+c.dataset.count,s=performance.now();(function f(n){const p=Math.min((n-s)/1200,1);c.textContent=(t===1968?Math.round(t*(1-Math.pow(1-p,3))):Math.round(t*(1-Math.pow(1-p,3))).toLocaleString("fr-FR")).toString();if(p<1)requestAnimationFrame(f)})(s)}
io.unobserve(e.target)}),{threshold:.2});
$$(".rv").forEach(el=>io.observe(el));
const tabs=$("#tabs");
if(tabs){tabs.innerHTML=`<div role="tablist" aria-label="Filières">${D.formations.map((f,i)=>`<button role="tab" id="t-${f.id}" aria-controls="p-${f.id}" aria-selected="${i==0}" tabindex="${i?-1:0}">${f.nom}</button>`).join("")}</div><div>${D.formations.map((f,i)=>`<div role="tabpanel" id="p-${f.id}" aria-labelledby="t-${f.id}"${i?" hidden":""}><h3>${f.nom}</h3><p>${f.intro}</p><div class="facts"><div><b>${f.duree}</b><small>Durée</small></div></div><ul>${f.cursus.map(c=>`<li>${c}</li>`).join("")}</ul>${f.notes?`<p class="note">${f.notes}</p>`:""}</div>`).join("")}<p class="note">${D.note}</p></div>`;
const tl=$$("[role=tab]",tabs),pn=$$("[role=tabpanel]",tabs);
const sel=i=>{tl.forEach((t,j)=>{t.setAttribute("aria-selected",i==j);t.tabIndex=i==j?0:-1;pn[j].hidden=i!=j});tl[i].focus()};
tl.forEach((t,i)=>{t.onclick=()=>sel(i);t.onkeydown=e=>{const k={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1}[e.key];if(k){e.preventDefault();sel((i+k+tl.length)%tl.length)}}})}
const f=$("#contact-form");
if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);location.href="mailto:ems@ecolemilitairesante.com?subject="+encodeURIComponent(d.get("sujet"))+"&body="+encodeURIComponent(d.get("message")+"\n\n"+d.get("nom"))};
})();
