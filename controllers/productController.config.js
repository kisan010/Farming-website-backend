const OgproductsSchema = require("../model/productSchema");
const dbOgproducts = require("../services/db.Cartproduct");

const getOgProducts = async (req, res) => {
  try {
    let dbRes = await dbOgproducts.readData(OgproductsSchema);
    res.status(200).json({ data: dbRes });
  } catch (err) {
    res.status(500).json({
      message: "internal server Error",
      error: err,
    });
  }
};

const addOgProducts = async (req, res) => {
  try {
    const data=req.body;
    const dbRes=await dbOgproducts.addData(data,OgproductsSchema);
    res.status(200).json({data:dbRes,message:'product added'})
  } catch (err) {
     res.status(500).json({
            message:'internal server Error',
            error:err
            
        })
  }
};


module.exports = {
  getOgProducts,
  addOgProducts,
};
