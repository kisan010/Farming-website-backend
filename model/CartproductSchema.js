const mongoose=require('mongoose');

const {Schema,model}=mongoose;



const cartProductschema=new Schema({
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
      name:String,
      quantity:Number,
      price:Number,
      icon:String

},{timestamps:true});

module.exports=model('products',cartProductschema)