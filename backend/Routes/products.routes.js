const express = require("express");
const { ProductModel } = require("../Model/products.model");
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const {limit, sort, category, material, design, page} = req.query
  const limit_Number = limit ? parseInt(limit) : 15;
  try {
    // Quary parameters
    let query = {}
    if(category){
      query.category = category
    }
    if(material){
      query.material = material
    }
    if(design){
      query.design = design
    }
    
    // Sorting
    let sortOptions = {}
    if(sort === "asc"){
      sortOptions = {price : 1}
    }
    if(sort === "desc"){
      sortOptions = {price : -1}
    }

    // Pagination
    let pageNumber = page ? parseInt(page) : 1
    let totalCount = await ProductModel.countDocuments(query)
    let totalPages = Math.ceil(totalCount/limit_Number)

    // Send request to user
    const allProducts = await ProductModel.find(query)
                        .limit(limit_Number)
                        .skip((pageNumber - 1) * limit_Number)
                        .sort(sortOptions)

    res.status(200).json({success:true, msg:"All Products", products:allProducts, totalPages, page:pageNumber, CountProducts : allProducts.length })

  } catch (error) {
    res.status(500).json({success:false, msg:"Error in server", error:error.msg})
  }
});

module.exports = {productRouter}