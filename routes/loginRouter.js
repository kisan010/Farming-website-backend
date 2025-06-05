
const express=require('express');
const loginRouter=express.Router();
const loginController=require('../controllers/loginController.config.js')


loginRouter.post('/',loginController.loginuserData);


module.exports=loginRouter;