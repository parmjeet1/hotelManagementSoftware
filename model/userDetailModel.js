
const mongoose = require("mongoose");
const userDetailSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'users',required:true },
    name:{type:String,required:true},
    position:{type:String,required:true},
    mobile:{type:String}

})


const userDetailModel = mongoose.model("userDetails", userDetailSchema);

module.exports = userDetailModel;
