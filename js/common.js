function navLink(href,label){
  const active = location.pathname.endsWith(href) ? ' class="active"' : '';
  return `<a href="${href}"${active}>${label}</a>`;
}
function headerHTML(){
 return `<div class="topbar"><div class="container">
   <span>Tiruppur, Tamil Nadu · Garment Manufacturing & Wholesale</span>
   <span><a href="tel:${window.YCG.phone}">${window.YCG.phoneDisplay}</a><span class="dot">·</span><a href="tel:${window.YCG.phoneSecondary}">${window.YCG.phoneSecondaryDisplay}</a><span class="dot">·</span><a href="${waLink('Hello Your Choice Garments, I would like to enquire.')}" target="_blank" rel="noopener">WhatsApp</a><span class="dot">·</span><a href="${window.YCG.indiamart}" target="_blank" rel="noopener">IndiaMART</a></span>
 </div></div>
 <header class="site"><div class="container nav">
  <a class="logo" href="index.html" aria-label="Your Choice Garments home">
    <img src="assets/brand/your-choice-garments-logo-transparent.png" alt="Your Choice Garments logo">
    <span class="logo-txt"><strong>Your Choice Garments</strong><span>Tiruppur · Since 2017</span></span>
  </a>
  <nav class="navlinks" aria-label="Primary">
    ${navLink('index.html','Home')}
    ${navLink('about.html','About')}
    <div class="dropdown"><a href="products.html">Products ▾</a>
      <div class="dropdown-menu">
        <a href="products.html">All products</a>
        <a href="products.html?cat=Round%20Neck">Round Neck T-Shirts</a>
        <a href="products.html?cat=Oversized">Oversized T-Shirts</a>
        <a href="products.html?cat=Polo">Cotton Polo T-Shirts</a>
        <a href="products.html?cat=Performance">Performance Jerseys</a>
        <a href="products.html?cat=Full%20Sleeve">Full Sleeve Pullovers</a>
        <a href="products.html?cat=Hoodie">Hoodies</a>
        <a href="products.html?cat=Sweatshirt">Sweatshirts</a>
      </div>
    </div>
    ${navLink('manufacturing.html','Manufacturing')}
    ${navLink('customisation.html','Customisation')}
    ${navLink('wholesale.html','Wholesale')}
    ${navLink('portfolio.html','Portfolio')}
    ${navLink('store.html','Store')}
    ${navLink('blog.html','Blog')}
    ${navLink('hac.html','HAC')}
    ${navLink('contact.html','Contact')}
    <a class="btn btn-primary btn-sm" href="wholesale.html">Request a Quote</a>
  </nav>
  <button class="hamburger" id="menuBtn" aria-label="Open menu" aria-expanded="false">☰</button>
 </div></header>
 <div class="mobile-menu" id="mobileMenu">
   <button class="close" id="closeMenu" aria-label="Close menu">✕</button>
   <div class="mobile-quick">
     <a href="tel:${window.YCG.phone}" class="mq"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg><small>Call</small></a>
     <a href="${waLink('Hello Your Choice Garments, I would like to enquire.')}" target="_blank" rel="noopener" class="mq mq-wa"><img src="assets/whatsapp.png" alt=""><small>WhatsApp</small></a>
     <a href="${window.YCG.indiamart}" target="_blank" rel="noopener" class="mq"><img src="assets/brands/indiamart-square.svg" alt="IndiaMART" style="width:22px;height:22px"><small>IndiaMART</small></a>
     <a href="${window.YCG.trustseal}" target="_blank" rel="noopener" class="mq"><img src="assets/brands/indiamart-square.svg" alt="IndiaMART" style="width:22px;height:22px"><small>TrustSeal</small></a>
   </div>
   <div class="mobile-links">
     <a href="index.html">Home</a><a href="about.html">About Us</a><a href="products.html">Products</a>
     <a href="manufacturing.html">Manufacturing</a><a href="customisation.html">Customisation</a>
     <a href="wholesale.html">Wholesale</a><a href="portfolio.html">Portfolio</a><a href="store.html">Store</a><a href="blog.html">Blog</a><a href="hac.html">HAC</a><a href="contact.html">Contact</a>
   </div>
   <a class="btn btn-primary" href="wholesale.html">Request a Quote</a>
   <div class="mobile-foot">Tiruppur, Tamil Nadu · +91 82200 89690</div>
 </div>`;
}
function footerHTML(){
  const isHac = /hac\.html/i.test(location.pathname);
  const email = isHac ? window.YCG.hacEmail : window.YCG.email;
  const addr = isHac ? window.YCG.hacAddress : window.YCG.address;
 return `<footer><div class="container">
  <div class="footer-grid">
   <div class="brand">
     <img src="assets/brand/your-choice-garments-logo-transparent.png" alt="Your Choice Garments logo">
     <p>Tiruppur-based garment manufacturer and wholesale supplier. Blank, bulk, custom and private-label apparel for brands, retailers and businesses.</p>

   </div>
   <div><h4>Company</h4>
     <a href="about.html">About Us</a><br><a href="manufacturing.html">Manufacturing</a><br><a href="customisation.html">Customisation</a><br><a href="wholesale.html">Wholesale</a><br><a href="portfolio.html">Brand Portfolio</a><br><a href="contact.html">Contact</a>
   </div>
   <div><h4>Products</h4>
     <a href="products.html?cat=Round%20Neck">Round Neck T-Shirts</a><br><a href="products.html?cat=Oversized">Oversized T-Shirts</a><br><a href="products.html?cat=Polo">Cotton Polo T-Shirts</a><br><a href="products.html?cat=Performance">Performance Jerseys</a><br><a href="products.html?cat=Full%20Sleeve">Full Sleeve Pullovers</a><br><a href="products.html?cat=Hoodie">Hoodies</a>
   </div>
   <div><h4>Contact</h4>
     <a href="tel:${window.YCG.phone}">${window.YCG.phoneDisplay}</a><br>
     <a href="tel:${window.YCG.phoneSecondary}">${window.YCG.phoneSecondaryDisplay}</a><br>
     <a href="mailto:${email}">${email}</a><br>
     <span style="display:block;padding:4px 0">${addr}</span>
     <a href="${window.YCG.indiamart}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px"><img src="assets/brands/indiamart.svg" alt="IndiaMART" style="height:14px;width:auto"> Business profile ↗</a><br>
     <a href="${window.YCG.trustseal}" target="_blank" rel="noopener">IndiaMART TrustSeal ↗</a><br>
     <a href="${window.YCG.instagram}" target="_blank" rel="noopener">HAC Instagram ↗</a>
   </div>
  </div>
  <div class="footer-bottom"><span>© ${new Date().getFullYear()} Your Choice Garments. All rights reserved.</span><span>Manufacturing partner for quality knitwear · Tiruppur, India</span></div>
 </div></footer>
 <a class="wa-fab" href="${waLink('Hello Your Choice Garments, I would like to enquire about wholesale garments.')}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><img src="assets/whatsapp.png" alt=""></a>
 <div class="sticky-bar"><a class="btn btn-wa" href="${waLink('Hello Your Choice Garments, I would like to enquire about wholesale garments.')}" target="_blank" rel="noopener">WhatsApp Enquiry</a><a class="btn btn-primary" href="wholesale.html">Request a Quote</a></div>`;
}
document.addEventListener('DOMContentLoaded',()=>{
  const h=document.getElementById('site-header'); if(h) h.innerHTML=headerHTML();
  const f=document.getElementById('site-footer'); if(f) f.innerHTML=footerHTML();
  const mb=document.getElementById('menuBtn'), mm=document.getElementById('mobileMenu'), cm=document.getElementById('closeMenu');
  if(mb&&mm){ mb.addEventListener('click',()=>{mm.classList.add('open');mb.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';});
    if(cm) cm.addEventListener('click',()=>{mm.classList.remove('open');mb.setAttribute('aria-expanded','false');document.body.style.overflow='';});
  }
  // repeat marquee content until it comfortably overfills the viewport so the loop never shows a gap
  const fillMarquees=()=>{
    document.querySelectorAll('.marquee,.hac-track').forEach(t=>{
      const base=t.innerHTML; let guard=0;
      while(t.scrollWidth<innerWidth*2&&guard++<4) t.innerHTML+=base;
    });
  };
  fillMarquees();
  window.addEventListener('load',fillMarquees);
});
