const menuButton=document.querySelector('[data-menu-button]');
const mainNav=document.querySelector('[data-main-nav]');
if(menuButton&&mainNav){menuButton.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}))}

const tabLinks=[...document.querySelectorAll('.tab-nav [data-tab-link]')];
const tabTriggers=[...document.querySelectorAll('[data-tab-link]')];
const tabPanels=[...document.querySelectorAll('[data-tab-panel]')];
const validTabs=new Set(tabPanels.map(p=>p.dataset.tabPanel));

function activateTab(id,{updateHash=false}={}){
  const target=validTabs.has(id)?id:(tabPanels[0]?.dataset.tabPanel||'');
  tabLinks.forEach(link=>{const active=link.dataset.tabLink===target;link.classList.toggle('active',active);link.setAttribute('aria-selected',String(active));link.tabIndex=active?0:-1});
  tabPanels.forEach(panel=>{const active=panel.dataset.tabPanel===target;panel.classList.toggle('active',active);panel.hidden=!active});
  if(updateHash&&target)history.pushState({tab:target},'',`#${target}`);
}

tabTriggers.forEach(link=>link.addEventListener('click',event=>{event.preventDefault();activateTab(link.dataset.tabLink,{updateHash:true});document.querySelector('.case-main')?.scrollIntoView({behavior:'smooth',block:'start'})}));
tabLinks.forEach((link,index)=>{
  link.id=`tab-${link.dataset.tabLink}`;
  const panel=document.querySelector(`[data-tab-panel="${link.dataset.tabLink}"]`);
  if(panel){panel.setAttribute('aria-labelledby',link.id);panel.id=`panel-${link.dataset.tabLink}`;link.setAttribute('aria-controls',panel.id)}
  link.addEventListener('keydown',event=>{
    if(!['ArrowRight','ArrowLeft','Home','End'].includes(event.key))return;
    event.preventDefault();
    let next=index;
    if(event.key==='ArrowRight')next=(index+1)%tabLinks.length;
    if(event.key==='ArrowLeft')next=(index-1+tabLinks.length)%tabLinks.length;
    if(event.key==='Home')next=0;
    if(event.key==='End')next=tabLinks.length-1;
    tabLinks[next].focus();tabLinks[next].click();
  });
});
function tabFromHash(){return location.hash.replace(/^#/,'')}
if(tabPanels.length)activateTab(tabFromHash());
window.addEventListener('popstate',()=>activateTab(tabFromHash()));
window.addEventListener('hashchange',()=>activateTab(tabFromHash()));

document.querySelectorAll('a[href^="#"]').forEach(link=>{if(link.hasAttribute('data-tab-link'))return;link.addEventListener('click',()=>mainNav?.classList.remove('open'))});
