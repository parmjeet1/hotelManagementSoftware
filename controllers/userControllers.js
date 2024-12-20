const userDetailModel = require("../model/userDetailModel");
const userModel = require("../model/userModel"); // Ensure path is correct
const bcrypt=require("bcrypt");

const hotelStaffRegister = async (req, res) => {
    try {
        const { name, email,mobile,role,password,confirmPassword,position } = req.body;

        // Validate input
        if (!name || !email || !mobile || ! role || !password || !confirmPassword ||!position  ) {
            return res.status(400).json({ error: "Fields can not be Empty" });
        }

        const isEmailExist = await userModel.findOne({ email: email });
        if (isEmailExist) {
            return res.status(422).json({ error: "Email already exists" });
        }

        if(password!=confirmPassword){
            return res.status(422).json({error:"pasword does not match"})
        }
        const hashPassword=bcrypt.hashSync(password,10);
        

        const newUser = await userModel.create({ 
            
            email,
            password:hashPassword,
            role
        });

        // save hotel staff data
        const newUserDetail=await userDetailModel.create({
userId:newUser._id,
name,
position,
mobile
        })
        return res.status(201).json({ message: "User created successfully",
             user: newUser,
            userDetail:newUserDetail });
    } catch (error) {
        console.error("Error in register function:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const teamRegistration=async(req,res)=>{
    const {name,email,password,confirmPassword,mobile,role}=req.body;
    if(!name||!email||!password||!confirmPassword||!mobile||!role){
        return res.status(500).json({error:"fileds can not be empty"});
    }
    if(password!=confirmPassword){
        return res.status(500).json({error:"password does not match"})
    }
const    hashPassword=bcrypt.hashSync(password,10);
    newTeamMember=userModel.create({
        email,
        password:hashPassword
    })
}
const teamLogin=async(req,res)=>{};
const hotelStaffLogin= async(rheq,reos)=>{
const {email,password}=req.body;
};
module.exports = { hotelStaffRegister };
