
const express=require("express");
const {hotelStaffRegister}=require("../controllers/userControllers")
const userRoute=express.Router();
userRoute.post("/register",hotelStaffRegister)
module.exports={userRoute};