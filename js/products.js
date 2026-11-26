window.PRODUCTS = [
 {id:"oversized-tee",name:"Men Oversized T-Shirt",code:"YCG-OV-001",category:"Oversized",desc:"Relaxed drop-shoulder oversized silhouette with thick ribbed collar for streetwear and fashion labels.",featured:true,
  img:"assets/products/oversized/oversized-tee-black.jpg",
  gallery:[
    "assets/products/oversized/oversized-tee-black.jpg",
    "assets/products/oversized/oversized-tee-white.jpg",
    "assets/products/oversized/oversized-tee-sand.jpg",
    "assets/products/oversized/oversized-tee-red.jpg",
    "assets/products/oversized/oversized-tee-purple.jpg",
    "assets/products/oversized/oversized-tee-sage.jpg",
    "assets/products/oversized/oversized-tee-olive.jpg",
    "assets/products/oversized/oversized-tee-maroon.jpg",
    "assets/products/oversized/oversized-tee-forest.jpg"
  ]},
 {id:"regular-fit-tee",name:"Regular Fit Round Neck T-Shirt",code:"YCG-RN-001",category:"Round Neck",desc:"Everyday regular-fit round neck knit tee supplied in bulk for wholesale, retail and corporate programmes.",featured:true,
  img:"assets/products/t-shirts/regular-fit-tee-navy.jpg",
  gallery:["assets/products/t-shirts/regular-fit-tee-navy.jpg"]},
 {id:"acid-wash",name:"Acid Wash T-Shirt",code:"YCG-AW-001",category:"Acid Wash",desc:"Vintage acid-wash finish round neck tee for streetwear and fashion-led collections.",featured:true,
  img:"assets/products/acid-wash/acid-wash-tee-black.jpg",
  gallery:["assets/products/acid-wash/acid-wash-tee-black.jpg"]},
 {id:"polo-tee",name:"Classic Cotton Polo T-Shirt",code:"YCG-PL-001",category:"Polo",desc:"Collared knit polo with contrast tipping, pocket and breathable mesh options for corporate, uniform and retail supply.",featured:true,
  img:"assets/products/polo/polo-tee-navy-pocket.jpg",
  gallery:[
    "assets/products/polo/polo-tee-navy-pocket.jpg",
    "assets/products/polo/polo-tee-olive-tipped.jpg",
    "assets/products/polo/polo-tee-mint-navy.jpg",
    "assets/products/polo/polo-tee-white-sky.jpg",
    "assets/products/polo/polo-tee-grey-mesh.jpg"
  ]},
 {id:"colorblock-polo",name:"Colorblock & Striped Polo T-Shirt",code:"YCG-PL-002",category:"Polo",desc:"Cut-and-sew colorblock and yarn-dyed striped polos for brand collections, uniforms and promotional ranges.",featured:true,
  img:"assets/products/polo/polo-tee-colorblock-mustard-navy.jpg",
  gallery:[
    "assets/products/polo/polo-tee-colorblock-mustard-navy.jpg",
    "assets/products/polo/polo-tee-colorblock-black-blue.jpg",
    "assets/products/polo/polo-tee-striped-khaki.jpg",
    "assets/products/polo/polo-tee-striped-navy-multi.jpg"
  ]},
 {id:"full-sleeve-zip",name:"Full Sleeve Quarter-Zip Pullover",code:"YCG-FS-001",category:"Full Sleeve",desc:"Collared full-sleeve quarter-zip pullover, suitable for winter, corporate and smart-casual ranges.",featured:true,
  img:"assets/products/full-sleeve/full-sleeve-quarter-zip-black.jpg",
  gallery:[
    "assets/products/full-sleeve/full-sleeve-quarter-zip-black.jpg",
    "assets/products/full-sleeve/full-sleeve-quarter-zip-white.jpg"
  ]},
 {id:"sweatshirt",name:"Crewneck & Pocket Sweatshirt",code:"YCG-SW-001",category:"Sweatshirt",desc:"Heavyweight crewneck and raglan kangaroo-pocket sweatshirts for branded and plain winter ranges.",featured:true,
  img:"assets/products/sweatshirts/sweatshirt-pocket-taupe.jpg",
  gallery:[
    "assets/products/sweatshirts/sweatshirt-pocket-taupe.jpg",
    "assets/products/sweatshirts/sweatshirt-crew-black.jpg"
  ]},
 {id:"hoodie",name:"Men Pullover Hoodie",code:"YCG-HD-001",category:"Hoodie",desc:"Pullover fleece hoodie with kangaroo pocket in plain and custom-branded finishes.",featured:true,
  img:"assets/products/hoodies/hoodie-black.jpg",
  gallery:["assets/products/hoodies/hoodie-black.jpg"]},
 {id:"poly-performance",name:"Full Sleeve Performance Jersey",code:"YCG-PP-001",category:"Performance",desc:"Sublimated full-sleeve quarter-zip performance jersey for sports teams, clubs and activewear programmes.",featured:true,
  img:"assets/products/performance/performance-jersey-full-sleeve-black.jpg",
  gallery:["assets/products/performance/performance-jersey-full-sleeve-black.jpg"]},
 {id:"custom-printed",name:"Custom Printed T-Shirt",code:"YCG-CP-001",category:"Custom Printed",desc:"Screen printed or DTF-branded graphic tee produced to your artwork and specification.",featured:true,
  img:"assets/products/custom-printed/custom-printed-tee-black.jpg",
  gallery:["assets/products/custom-printed/custom-printed-tee-black.jpg"]}
];
window.CATEGORIES = [...new Set(window.PRODUCTS.map(p=>p.category))];
