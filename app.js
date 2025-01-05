var cardContainer = document.getElementById('cardContainer');
var clothesData = {
  women: {
    women1: {
      name: " three piece drees  ",
      imgSrc: "women/1.jpeg ",
      price: "90.99",
    },
    women2: {
      name: "black two piece ",
      imgSrc: "women/2.jpeg ",
      price: "90.99",
    },
    women3: {
      name: " ",
      imgSrc: "women/3.jpeg ",
      price: "90.99",
    },
    women4: {
      name: "white three piece ",
      imgSrc: "women/4.jpeg ",
      price: "90.99",
    },
    women5: {
      name: "blue two piece ",
      imgSrc: "women/5.jpeg ",
      price: "90.99",
    },
     women16: {
      name: " frogs ",
      imgSrc: "/women/6.jpeg ",
      price: "90.99",
    },
    
    women17: {
      name: "white with red ",
      imgSrc: "/women/7.jpeg ",
      price: "90.99",
    },
    women18: {
      name: "Heavy Embroidery ",
      imgSrc: "women/8.jpeg ",
      price: "90.99",
    },
    women19: {
      name: "Long with color ",
      imgSrc: " /women/9.jpeg",
      price: "90.99",
    },
  
  },
  MEN: {
  MEN1: {
    name: " ",
    imgSrc: "women/MEN/12.png ",
    price: "90.99",
  },
  MEN2: {
    name: " ",
    imgSrc: "women/MEN/13.png ",
    price: "90.99",
  },
  MEN3: {
    name: " ",
    imgSrc: "women/MEN/14.png ",
    price: "90.99",
  },
  MEN4: {
    name: " ",
    imgSrc: "women/MEN/15.png ",
    price: "90.99",
  },
  MEN5: {
    name: " ",
    imgSrc: "women/MEN/16.png ",
    price: "90.99",
  },
  MEN6: {
    name: " ",
    imgSrc: "women/MEN/17.png ",
    price: "90.99",
  },
  MEN7: {
    name: " ",
    imgSrc: "women/MEN/18.png ",
    price: "90.99",
  },
  MEN8: {
    name: " ",
    imgSrc: "women/MEN/19.png ",
    price: "90.99",
  },
  MEN9: {
    name: " ",
    imgSrc: "women/MEN/20.png ",
    price: "90.99",
  },
  
},
CHILDREN: {
  CHILDREN1 :{
      name: "Babay pink ",
      imgSrc: "women/kides/b.png ",
      price: "90.99",
    },
    CHILDREN2 :{
      name: " ",
      imgSrc: "women/kides/f.png ",
      price: "90.99",
    },
    CHILDREN3 :{
      name: " ",
      imgSrc: "women/kides/g.png ",
      price: "90.99",
    }, 
    CHILDREN4 :{
      name: " ",
      imgSrc: "women/kides/p.png ",
      price: "90.99",
    },
    CHILDREN5 :{
      name: " ",
      imgSrc: "women/kides/pi.png ",
      price: "90.99",
    },
    CHILDREN6 :{
      name: " ",
      imgSrc: "women/kides/y.png ",
      price: "90.99",
    },
    CHILDREN7 :{
      name: " ",
      imgSrc: "women/kid/cut.png ",
      price: "90.99",
    },
    CHILDREN8 :{
      name: " ",
      imgSrc: "women/kid/e.png ",
      price: "90.99",
    },
    CHILDREN9 :{
      name: " ",
      imgSrc: "women/kid/or.png ",
      price: "90.99",
    },
    CHILDREN10 :{
      name: " ",
      imgSrc: "women/kid/pan.png ",
      price: "90.99",
    },
    CHILDREN11 :{
      name: " ",
      imgSrc: "women/kid/t.png ",
      price: "90.99",
    },

  }
}



function blankdiv(brand = null) {
  cardContainer.innerHTML = ''; 
  for (var main in clothesData) {
    console.log(main)

      if (brand && main !== brand) continue; 
      var brandData = clothesData[main];

      for (var m in brandData) {
          var car = brandData[m];

          cardContainer.innerHTML += `
              <div class="card" style="width: 14rem;">
                  <img src="${car.imgSrc}" alt="${car.name}">
                  <div class="card-body" style="color:bisque;">
                      <h5 class="card-title" style="margin-top: 10px;" >${car.name}</h5>
                      <p class="card-text" style="margin-top: 2px;">Price: $${car.price}</p>
                      <div class="button"  style="background-color:goldenrod;">
                       <button> add to card</button>
                  </div></div>
              </div>`; }
  }
}
cardContainer.style.display = 'flex'
cardContainer.style.justifyContent  = 'space-between'
 cardContainer.style.flexWrap = 'wrap'
 cardContainer.style.marginLeft = '70px'
 cardContainer.style.marginTop = '50px'
 cardContainer.style.hover = 'scale-125px'
function filterCars(brand) {
  blankdiv(brand);
}
function showAllCars() {
  blankdiv();
}
blankdiv();