const express=require('express');
const Cartrouter=express.Router();
const cartController=require('../controllers/cartcontroller.config');
const protect = require('../middleware/protectRoutemiddleware');


Cartrouter.get('/',protect,cartController.getProducts);
Cartrouter.post('/',protect,cartController.addProducts);
Cartrouter.delete('/:id',cartController.deleteProducts);
Cartrouter.put('/:id',cartController.updateProducts);


module.exports=Cartrouter;