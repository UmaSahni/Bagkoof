const getProducts = (category=null, design=null, material=null, color=null, sort=null) => {
  let url = "http://localhost:8080/bags";

  if (category) {
    url += `?category=${category}`;
  }
  if(design){
    url +=`?design=${design}`
  }

  if(material){
    url+=`?material=${material}`
  }

  if(color){
    url+=`?color=${color}`
  }

  if(sort){
    url+=`?sort=${sort}`
  }

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.products);
      const products = data.products;
      console.log(products);
      showProductsToDOM(products);
    })
    .catch((err) => console.log(err));
};

getProducts();

function showProductsToDOM(products) {
  let container = document.getElementById("products");
  let productsHTML = "";

  products.forEach((product) => {
    productsHTML += `
      <div class="child">
        <img src=https://images.bewakoof.com/t640/${product.display_image} height="300px" alt="">
        <p class="font-size-small-dark">${product.brand}</p>
        <div class="flex-inside-child-div font-size-small">
          <p>${product.name}</p>
          <i class="fa-regular fa-heart fa-xl"></i>
        </div>
        <div class="flex-inside-child-div">
          <p>₹ ${product.price}</p>
          <p>${product.member_discount}</p>
        </div>
      </div>
    `;
  });

  container.innerHTML = productsHTML;
}


/*
! <---- Filters Functionalities ---->
* 1. Catergory
*/

// Get the list of categories
const categoriesList = document.getElementById('categories');

// Add click event listener to each <li> element
categoriesList.querySelectorAll('li').forEach(category => {
    category.addEventListener('click', () => {
    getProducts(category.textContent)
        // console.log(category.textContent);
    });
});

// * Design
const designList = document.getElementById("desgin")

designList.querySelectorAll("li").forEach(design => {
  design.addEventListener("click", ()=>{
    getProducts(null, design.textContent )
    // console.log(design.textContent)
  })
})

// * Material
const materialList = document.getElementById("material")

materialList.querySelectorAll("li").forEach(material =>{
  material.addEventListener("click", ()=>{
    getProducts(null, null, material.textContent)
  })
})

// * Color Filter

const colorList = document.getElementById("colorFilter")

colorList.querySelectorAll("li").forEach((el)=>{
  el.addEventListener("click", ()=>{
    getProducts(null, null, null,el.textContent)
  })
})


// * Sort By Price

const sortPrice = document.getElementById("sort-price")

sortPrice.querySelectorAll("li").forEach((el)=>{
  el.addEventListener("click", ()=>{
    let text = ""
    if(el.textContent == "low to high"){
      text = "asc"
    }
    else{
      text="desc"
    }
    getProducts(null, null, null,null, text)
  })
})






//! <--- Accordian Logic --->

let accordian = document.querySelectorAll(".accordian")

accordian.forEach((el)=>{
  const header = el.querySelector(".acc-header")
console.log(header)
  header.addEventListener("click",()=>{
    el.querySelector(".acc-category").classList.toggle("active")
  })
})