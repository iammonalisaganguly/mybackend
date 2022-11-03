const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
{
    name:String,
    category:String,
    price : Number
},
{timestamp:true}
);
module.exports = mongoose.model("Products",productSchema);