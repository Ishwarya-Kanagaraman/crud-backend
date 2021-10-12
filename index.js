const express=require("express");
const app=express();
const infoRouter=require("./router.js")
const mongoose=require("mongoose");
const morgan=require("morgan");
const cors=require("cors");
const PORT=process.env.PORT || 5000;
//middleware
app.use(cors());
app.use(morgan("dev"))
app.use(express.json())
//db connection 
const url="mongodb+srv://ishwarya:uL1J4VSWiQ4vTT4t@cluster0.9ohui.mongodb.net/crudDb?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
   if(!err){
       console.log("DB connected successfully")
   }
})
// Router
app.use("/info",infoRouter)
// listen port
app.listen(PORT,()=>{
    console.log("server started on 5000")
})