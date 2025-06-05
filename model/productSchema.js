const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const OgproductsSchema = new Schema(
  {
    name: String,
    quantity: Number,
    price: Number,
    description: String,
    icon: String,
  },
  { timestamps: true }
);

module.exports = model("Ogproducts", OgproductsSchema);
