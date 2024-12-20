const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   
    email: {type:String ,required:true,unique:true },
    password: String,
    role:{
type:String,
enum:['hotel_staff','backend_team']
    },
    createdAt:{type:Date,default:Date.now},
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
