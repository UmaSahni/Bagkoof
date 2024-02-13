const getProducts = () => {
  fetch("http://localhost:8080/bags")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const products = data.produts[0].products;
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
