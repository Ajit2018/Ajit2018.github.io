/* Canonical portfolio navigation */
(function normalizePortfolioNavigation(){
  const nav=document.querySelector('.portfolio-project-nav');
  if(!nav)return;
  const path=(location.pathname.split('/').pop()||'').toLowerCase();
  const active=
    path==='banking.html'?'banking':
    path==='pricing.html'?'pricing':
    path==='finance.html'?'finance':
    path==='project-economics.html'?'project-economics':
    path==='engineering.html'?'engineering':
    path==='ai-transformation.html'?'ai-transformation':
    path==='supply-chain.html'?'supply-chain':'';

  const root=location.pathname.includes('/projects/')?'':'projects/';
  const item=(name,label,kind)=>`<a class="${kind}${active===name?' active':''}" href="${root}${name}.html#overview">${label}</a>`;
  nav.innerHTML=
    item('engineering','Engineering &amp; Simulation','professional')+
    item('banking','Banking','case')+
    item('pricing','Pricing &amp; RGM','live')+
    item('finance','Finance','professional')+
    item('project-economics','Project Economics','professional')+
    item('ai-transformation','AI Transformation','secondary')+
    item('supply-chain','Supply Chain','planned');
})();

const menuButton=document.querySelector('[data-menu-button]');
const mainNav=document.querySelector('[data-main-nav]');
if(menuButton&&mainNav){
  menuButton.addEventListener('click',()=>{
    const open=mainNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded',String(open));
  });
  mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    mainNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
  }));
}

/* Level 1: view-based homepage navigation (no anchor scrolling). */
const siteViews=[...document.querySelectorAll('[data-site-view]')];
const siteLinks=[...document.querySelectorAll('[data-site-link]')];
const homeProjectNav=document.querySelector('[data-home-project-nav]');
const validViews=new Set(siteViews.map(v=>v.dataset.siteView));

function viewFromHash(){
  const id=location.hash.replace(/^#/,'');
  return validViews.has(id)?id:'home';
}

function activateSiteView(id,{updateHash=false,replaceHash=false}={}){
  if(!siteViews.length)return;
  const target=validViews.has(id)?id:'home';

  siteViews.forEach(view=>{
    const active=view.dataset.siteView===target;
    view.hidden=!active;
    view.classList.toggle('active',active);
  });

  siteLinks.forEach(link=>{
    const active=link.dataset.siteLink===target;
    link.classList.toggle('active',active);
    if(active)link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  });

  if(homeProjectNav)homeProjectNav.hidden=target!=='projects';

  const isHome=target==='home';
  const isAbout=target==='about';
  const footer=document.querySelector('footer');
  if(footer)footer.hidden=isHome||isAbout;
  document.body.classList.toggle('home-mode',isHome);
  document.documentElement.classList.toggle('home-mode',isHome);
  document.body.classList.toggle('about-mode',isAbout);
  document.documentElement.classList.toggle('about-mode',isAbout);

  if(updateHash){
    const url=`#${target}`;
    if(replaceHash)history.replaceState({view:target},'',url);
    else history.pushState({view:target},'',url);
  }

  /* Keep the interface anchored at the top; do not scroll to a document section. */
  window.scrollTo({top:0,left:0,behavior:'auto'});
}

siteLinks.forEach(link=>link.addEventListener('click',event=>{
  if(!siteViews.length)return;
  const href=link.getAttribute('href')||'';
  if(!href.startsWith('#'))return;
  event.preventDefault();
  activateSiteView(link.dataset.siteLink,{updateHash:true});
  mainNav?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
}));

if(siteViews.length){
  activateSiteView(viewFromHash());
  window.addEventListener('popstate',()=>activateSiteView(viewFromHash()));
  window.addEventListener('hashchange',()=>activateSiteView(viewFromHash()));
}

/* Level 3: case-study tabs. */
const tabLinks=[...document.querySelectorAll('.tab-nav [data-tab-link]')];
const tabTriggers=[...document.querySelectorAll('[data-tab-link]')];
const tabPanels=[...document.querySelectorAll('[data-tab-panel]')];
const validTabs=new Set(tabPanels.map(p=>p.dataset.tabPanel));

function activateTab(id,{updateHash=false}={}){
  const target=validTabs.has(id)?id:(tabPanels[0]?.dataset.tabPanel||'');
  tabLinks.forEach(link=>{
    const active=link.dataset.tabLink===target;
    link.classList.toggle('active',active);
    link.setAttribute('aria-selected',String(active));
    link.tabIndex=active?0:-1;
  });
  tabPanels.forEach(panel=>{
    const active=panel.dataset.tabPanel===target;
    panel.classList.toggle('active',active);
    panel.hidden=!active;
  });
  if(updateHash&&target){
    history.pushState({tab:target},'',`#${target}`);
    /* Case-study tabs replace the page content below the persistent navigation.
       Return to the top so the newly selected section is immediately visible. */
    window.scrollTo({top:0,left:0,behavior:'auto'});
  }
}

tabTriggers.forEach(link=>link.addEventListener('click',event=>{
  event.preventDefault();
  activateTab(link.dataset.tabLink,{updateHash:true});
}));

tabLinks.forEach((link,index)=>{
  link.id=`tab-${link.dataset.tabLink}`;
  const panel=document.querySelector(`[data-tab-panel="${link.dataset.tabLink}"]`);
  if(panel){
    panel.setAttribute('aria-labelledby',link.id);
    panel.id=`panel-${link.dataset.tabLink}`;
    link.setAttribute('aria-controls',panel.id);
  }
  link.addEventListener('keydown',event=>{
    if(!['ArrowRight','ArrowLeft','Home','End'].includes(event.key))return;
    event.preventDefault();
    let next=index;
    if(event.key==='ArrowRight')next=(index+1)%tabLinks.length;
    if(event.key==='ArrowLeft')next=(index-1+tabLinks.length)%tabLinks.length;
    if(event.key==='Home')next=0;
    if(event.key==='End')next=tabLinks.length-1;
    tabLinks[next].focus();
    tabLinks[next].click();
  });
});

function tabFromHash(){return location.hash.replace(/^#/,'')}
if(tabPanels.length)activateTab(tabFromHash());
if(tabPanels.length){
  window.addEventListener('popstate',()=>activateTab(tabFromHash()));
  window.addEventListener('hashchange',()=>activateTab(tabFromHash()));
}


/* Portfolio analytics instrumentation.
   GA4 remains disabled until PORTFOLIO_ANALYTICS_ID is set to a valid G-... id.
   No personally identifiable information is collected by this code. */
(function portfolioAnalytics(){
  const measurementId = window.PORTFOLIO_ANALYTICS_ID || '';
  const validId = /^G-[A-Z0-9]+$/i.test(measurementId);
  if(!validId) return;

  const params = new URLSearchParams(location.search);
  const campaignKeys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
  const incoming = {};
  campaignKeys.forEach(key=>{ const value=params.get(key); if(value) incoming[key]=value; });
  if(Object.keys(incoming).length){
    try{ sessionStorage.setItem('aps_portfolio_campaign',JSON.stringify(incoming)); }catch(_e){}
  }
  let campaign = incoming;
  if(!Object.keys(campaign).length){
    try{ campaign=JSON.parse(sessionStorage.getItem('aps_portfolio_campaign')||'{}')||{}; }catch(_e){ campaign={}; }
  }

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  const tag=document.createElement('script');
  tag.async=true;
  tag.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(measurementId);
  document.head.appendChild(tag);

  gtag('js',new Date());
  gtag('config',measurementId,{
    anonymize_ip:true,
    send_page_view:true,
    page_path:location.pathname+location.search+location.hash
  });

  function pageName(){
    const file=(location.pathname.split('/').pop()||'index.html').replace(/\.html$/,'');
    const section=location.hash.replace(/^#/,'')||'overview';
    return file+':'+section;
  }

  function baseEvent(){
    return {
      page_name:pageName(),
      page_path:location.pathname+location.hash,
      campaign_source:campaign.utm_source||'(direct)',
      campaign_medium:campaign.utm_medium||'(none)',
      campaign_name:campaign.utm_campaign||'(none)'
    };
  }

  function track(name,extra){
    gtag('event',name,Object.assign(baseEvent(),extra||{}));
  }
  window.apsTrack = track;

  track('portfolio_view');

  document.addEventListener('click',event=>{
    const a=event.target.closest('a[href]');
    if(!a) return;
    let target;
    try{ target=new URL(a.href,location.href); }catch(_e){ return; }
    const label=(a.textContent||'').trim().replace(/\s+/g,' ').slice(0,120);
    const sameHost=target.hostname===location.hostname;
    if(target.protocol==='mailto:'){
      track('contact_click',{contact_method:'email',link_label:label});
    }else if(!sameHost && /^https?:$/.test(target.protocol)){
      track('outbound_click',{link_domain:target.hostname,link_url:target.href,link_label:label});
    }else if(sameHost){
      track('internal_navigation',{destination_path:target.pathname+target.hash,link_label:label});
    }
  },{capture:true});

  let lastHash=location.hash;
  function trackVirtualView(){
    if(location.hash===lastHash) return;
    lastHash=location.hash;
    track('portfolio_section_view',{section:location.hash.replace(/^#/,'')||'overview'});
  }
  window.addEventListener('hashchange',trackVirtualView);
  window.addEventListener('popstate',trackVirtualView);

  let maxDepth=0;
  function depth(){
    const doc=document.documentElement;
    const scrollable=Math.max(doc.scrollHeight-innerHeight,1);
    const pct=Math.min(100,Math.round((scrollY/scrollable)*100));
    [25,50,75,90].forEach(mark=>{
      if(pct>=mark && maxDepth<mark){ maxDepth=mark; track('scroll_depth',{percent_scrolled:mark}); }
    });
  }
  window.addEventListener('scroll',depth,{passive:true});
})();
