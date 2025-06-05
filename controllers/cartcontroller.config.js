const dbProduct = require("../services/db.Cartproduct.js");
const cartProductschema = require("../model/CartproductSchema.js");

const getProducts = async (req, res) => {
  try {
    // const dbRes = await dbProduct.viewcartData(cartProductschema);
    const cartItems = await cartProductschema.find({ userId: req.user.id });
    res.status(200).json({ data: cartItems });
  } catch (err) {
    res.status(500).json({
      message: "internal server Error",
      error: err,
    });
  }
};

const addProducts = async (req, res) => {
  try {
    console.log(req);
    const data = {
      ...req.body,
      userId:req.user.id
    }

    const dbRes = await dbProduct.addcartData(data, cartProductschema);
    res.status(200).json({ data: dbRes, message: "product added" });
  } catch (err) {
    res.status(500).json({
      message: "internal server Error",
      error: err,
    });
  }
};

const deleteProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const dbRes = await dbProduct.deletecartData(id, cartProductschema);
    res.status(200).json({ data: dbRes });
  } catch (err) {
    res.status(500).json({
      message: "internal server Error",
      error: err,
    });
  }
};
const updateProducts = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("Product ID:", id);
    console.log("Received Data:", req.body);

    const { quantity,price } = req.body; 
    console.log("New Quantity:", quantity,price);

    const existingProduct = await dbProduct.viewcartDataById(id, cartProductschema);
   
    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    
    const updatedQuantity = existingProduct.quantity + quantity;
    const updatedPrice = updatedQuantity * (existingProduct.price / existingProduct.quantity); 
    
    const updatedProduct = await dbProduct.updatecartData(
      id,
      {
        quantity:updatedQuantity,
        price:updatedPrice 
      },
      cartProductschema
    );

    res.status(200).json({ data: updatedProduct });
  } catch (err) {
    res.status(500).json({
      message: "internal server Error",
      error: err,
    });
  }
};

module.exports = {
  addProducts,
  deleteProducts,
  getProducts,
  updateProducts,
};
