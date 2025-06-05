const express=require('express');
const productRouter=express.Router();
const productController=require('../controllers/productController.config')



productRouter.get('/',productController.getOgProducts);
productRouter.post('/',productController.addOgProducts);



module.exports=productRouter;
   