
const express=require("express");
const {register}=require("../controllers/userControllers")
const userRoute=express.Router();
userRoute.post("/register",register)
module.exports={userRoute};