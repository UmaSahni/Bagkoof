const express = require("express");
const { ProductModel } = require("../Model/products.model");
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  try {
    const allProducts = await ProductModel.find()
    res.status(200).send({msg:"All Products", produts:allProducts})
  } catch (error) {
    res.status(500).send({msg:"Error in server", error:error.msg})
  }
});

module.exports = {productRouter}