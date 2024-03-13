let url = "http://localhost:8080/bags";
let id = localStorage.getItem("product_id");

fetch(`${url}/${id}`)
  .then((res) => res.json())
  .then((data) => {
    showProduct(data.product[0]);
  });

const showProduct = (data) => {
  console.log(data);
  let conatiner = document.querySelector(".container");
  // console.log(conatiner)

  conatiner.innerHTML = `
  <div class="product-image">
            <img src=https://images.bewakoof.com/t1080/${data.display_image}
                alt=${data.custom_name}>
        </div>

        <div class="product-info">

            <h2>Bagkoof®</h2>

            <h1>${data.custom_name}</h1>

            <div class="rating-box">
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                ${data.average_rating}
            </div>

            <div id="product-price">
                <h2>₹ ${data.price} <span>${data.product_discount}</span> </h2>
            </div>

            <div class="quantity-box">
                <p>QTY : </p>

                <select name="" id="">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="1">5</option>
                </select>
            </div>


            <!-- Action Buttons -->
            <div class="action-btn">
                <button><i class="fa-solid fa-bag-shopping"></i> Add to Cart</button>
                <button>
                    <i class="fa-solid fa-heart"></i> Wishlist</button>
            </div>
        </div>
`;
};
