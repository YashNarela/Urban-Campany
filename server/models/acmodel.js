const mongoose = require("mongoose");


const AcModel= new mongoose.Schema({


    servicename:String,
    price:Number,
    
    

})



module.exports=mongoose.Schema("acModel",AcModel)