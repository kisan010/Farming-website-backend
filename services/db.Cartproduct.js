

const mongoose=require('mongoose');
require('dotenv').config();
// const url='mongodb://127.0.0.1:27017/Product';
console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB Atlas!"))
.catch(err => console.error("MongoDB Connection Error:", err));


const viewcartDataById = async (id, schema) => {
  let dbRes = await schema.findById(id);
  return dbRes;
};


const viewcartData=async(schema)=>{
     let dbRes=  await schema.find();
     return dbRes;
}
const updatecartData=async(id,data,schema)=>{
     let dbRes=  await schema.findByIdAndUpdate(id,data,{new:true});
     return dbRes;
}

const addcartData=async(data,schema)=>{
    let dbRes=await new schema(data).save();
    return dbRes;
}

const deletecartData=async(id,schema)=>{
    let dbRes=await schema.findByIdAndDelete(id);
    return dbRes;
}
const readData=async(schema)=>{
     let dbRes=  await schema.find();
     return dbRes;
}

const addData=async(data,schema)=>{
    let dbRes=await new schema(data).save();
    return dbRes;
}

module.exports={
    viewcartData,viewcartDataById,addcartData,updatecartData,deletecartData,addData,readData
}