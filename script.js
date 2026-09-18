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
  const footer=document.querySelector('footer');
  if(footer)footer.hidden=isHome;
  document.body.classList.toggle('home-mode',isHome);
  document.documentElement.classList.toggle('home-mode',isHome);

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
