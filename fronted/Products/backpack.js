const getProducts = () => {
  fetch("http://localhost:8080/bags")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const products = data.produts.products
      showProductsToDOM(products)
    })
    .catch((err) => console.log(err));
};

getProducts()

function showProductsToDOM(products){

}