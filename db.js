const mongoose =require('mongoose');
const { options } = require('nodemon/lib/config');

const mongoURI="mongodb+srv://root:root@cluster0.8lnw59s.mongodb.net/novafit-backend?retryWrites=true&w=majority";

const connectToMongo=()=>{

    bhdb
    
    if(mongoose.connect(mongoURI))
    console.log("connected")
    
}




module.exports=connectToMongo