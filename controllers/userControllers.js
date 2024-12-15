const {userModel}=require('../model/userModel');
require("dotenv").config();
const register=async(req,res)=>{
    try{
        return res.status(200).json({message:"controller working"});

    }catch(error){
        console.error(error)
    }
}

module.exports={
    register
}