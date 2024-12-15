const express=require("express");
require('dotenv').config();
 const app=express();
 const cors=require("cors");

 const {userRoute}=require("./routes/userRoute")
 app.use(express.json());
 const port=process.env.PORT;

 app.use(cors({origin:`http://localhost:3000`}));

 app.use('/api/users',userRoute)

 app.get("/",(req,res)=>{
   res.send(`server is ready at ${port}`)
}) 
 app.listen(port,()=>{
    console.log(`server is runnning at ${port} `);
})