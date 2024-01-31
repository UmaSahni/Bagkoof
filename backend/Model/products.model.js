const  mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    category : {type:String, required:true},
    color : {type:Array, required:true},
    display_image : {type:String, required:true},
    mrp : {type:Number, required:true},
    name : {type:String, required:true},
    price : {type:Number, required:true},
    url : {type:String, required:true},
    design : {type:String},
    average_rating : {type:Number, required:true},
    product_discount : {type:String},
})

const ProductModel = mongoose.model("products", productSchema)

module.exports = {ProductModel}