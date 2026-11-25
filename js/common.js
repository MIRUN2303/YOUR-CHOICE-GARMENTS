function navLink(href,label){
  const active = location.pathname.endsWith(href) ? ' class="active"' : '';
  return `<a href="${href}"${active}>${label}</a>`;
}
function headerHTML(){
 return `<div class="topbar"><div class="container">
   <span>Tiruppur, Tamil Nadu · Garment Manufacturing & Wholesale</span>
   <span><a href="tel:${window.YCG.phone}">${window.YCG.phoneDisplay}</a><span class="dot">·</span><a href="${waLink('Hello Your Choice Garments, I would like to enquire.')}" target="_blank" rel="noopener">WhatsApp</a><span class="dot">·</span><a href="${window.YCG.indiamart}" target="_blank" rel="noopener">IndiaMART</a></span>
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
        <a href="products.html?cat=Performance">Polyester T-Shirts</a>
        <a href="products.html?cat=Kids">Boys Cotton T-Shirts</a>
        <a href="products.html?cat=Hoodie">Hoodies</a>
        <a href="products.html?cat=Sweatshirt">Sweatshirts</a>
      </div>
    </div>
    ${navLink('manufacturing.html','Manufacturing')}
    ${navLink('customisation.html','Customisation')}
    ${navLink('wholesale.html','Wholesale')}
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
     <a href="tel:${window.YCG.phone}" class="mq">☎<small>Call</small></a>
     <a href="${waLink('Hello Your Choice Garments, I would like to enquire.')}" target="_blank" rel="noopener" class="mq">W<small>WhatsApp</small></a>
     <a href="${window.YCG.indiamart}" target="_blank" rel="noopener" class="mq">IM<small>IndiaMART</small></a>
     <a href="${window.YCG.trustseal}" target="_blank" rel="noopener" class="mq">TS<small>TrustSeal</small></a>
   </div>
   <a href="index.html">Home</a><a href="about.html">About Us</a><a href="products.html">Products</a>
   <a href="manufacturing.html">Manufacturing</a><a href="customisation.html">Customisation</a>
   <a href="wholesale.html">Wholesale</a><a href="store.html">Store</a><a href="blog.html">Blog</a><a href="hac.html">HAC</a><a href="contact.html">Contact</a>
   <a class="btn btn-primary" style="margin-top:18px" href="wholesale.html">Request a Quote</a>
 </div>`;
}
function footerHTML(){
 return `<footer><div class="container">
  <div class="footer-grid">
   <div class="brand">
     <img src="assets/brand/your-choice-garments-logo-transparent.png" alt="Your Choice Garments logo">
     <p>Tiruppur-based garment manufacturer and wholesale supplier. Blank, bulk, custom and private-label apparel for brands, retailers and businesses.</p>
     <p style="margin-top:12px;font-size:11px;color:#E0A3A3">Contact details pending owner confirmation.</p>
   </div>
   <div><h4>Company</h4>
     <a href="about.html">About Us</a><br><a href="manufacturing.html">Manufacturing</a><br><a href="customisation.html">Customisation</a><br><a href="wholesale.html">Wholesale</a><br><a href="contact.html">Contact</a>
   </div>
   <div><h4>Products</h4>
     <a href="products.html?cat=Round%20Neck">Round Neck T-Shirts</a><br><a href="products.html?cat=Oversized">Oversized T-Shirts</a><br><a href="products.html?cat=Polo">Cotton Polo T-Shirts</a><br><a href="products.html?cat=Performance">Polyester T-Shirts</a><br><a href="products.html?cat=Kids">Boys Cotton T-Shirts</a><br><a href="products.html?cat=Hoodie">Hoodies</a>
   </div>
   <div><h4>Contact</h4>
     <a href="tel:${window.YCG.phone}">${window.YCG.phoneDisplay}</a><br>
     <a href="mailto:${window.YCG.email}">${window.YCG.email}</a><br>
     <span style="display:block;padding:4px 0">${window.YCG.address}</span>
     <a href="${window.YCG.indiamart}" target="_blank" rel="noopener">IndiaMART Profile ↗</a><br>
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
  // subtle reveal on scroll
  document.querySelectorAll('.page-hero h1,.hero h1,.section-head h2,.split h2,.cta-band h2,.hac-page h2').forEach((el,i)=>{el.classList.add('reveal'); if(i%3===1) el.classList.add('reveal-d1'); if(i%3===2) el.classList.add('reveal-d2');});
  const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
});
