const express = require("express");
const { ProductModel } = require("../Model/products.model");
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const {
    limit,
    sort,
    category,
    material,
    design,
    page,
    color,
    discount,
  } = req.query;
  const limit_Number = limit ? parseInt(limit) : 15;
  try {
    // Quary parameters
    let query = {};
    if (category) {
      query.category = category;
    }
    if (material) {
      query.material = material;
    }
    if (design) {
      query.design = design;
    }
    if (color) {
      query.color = { $in: color };
    }
    if (discount) {
      query.product_discount = { $gte: discount };
    }
    // Sorting
    let sortOptions = {};
    if (sort === "asc") {
      sortOptions = { price: 1 };
    }
    if (sort === "desc") {
      sortOptions = { price: -1 };
    }
    // console.log(query, "this is query")
    // Pagination
    let pageNumber = page ? parseInt(page) : 1;
    let totalCount = await ProductModel.countDocuments(query);
    let totalPages = Math.ceil(totalCount / limit_Number);

    // Send request to user
    const allProducts = await ProductModel.find(query)
      .limit(limit_Number)
      .skip((pageNumber - 1) * limit_Number)
      .sort(sortOptions);

    res
      .status(200)
      .json({
        success: true,
        msg: "All Products",
        products: allProducts,
        totalPages,
        page: pageNumber,
        CountProducts: allProducts.length,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, msg: "Error in server", error: error.msg });
  }
});

productRouter.get("/:id", async (req, res) => {
  const productId = req.params.id;
  console.log(productId);
  try {
    const product = await ProductModel.find({ _id: productId });
    res.status(200).send({ success: true, product });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, msg: "Unable to product with specific id" });
  }
});

module.exports = { productRouter };
