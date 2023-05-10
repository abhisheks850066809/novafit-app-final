const mongoose =require('mongoose');
const { options } = require('nodemon/lib/config');
const dotenv=require('dotenv')
dotenv.config();

const mongoURI=process.env.MONGO_URL

const connectToMongo=()=>{

    if(mongoose.connect(mongoURI))
    console.log("connected")
    
}




module.exports=connectToMongo