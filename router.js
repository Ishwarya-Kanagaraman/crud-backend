const express=require("express");
const router=express.Router();
const InfoRouter=require("./infoSchema")


//create 

router.post("/",async(req,res)=>{
    const {Name,Age,City}=req.body;
    const data=new InfoRouter({
        Name,
        Age,
        City
    })
   await  data.save();
   res.json(data)
})

// get all data

router.get("/",async (req,res)=>{
    try{
        const dataList=await  InfoRouter.find();
        res.send(dataList)
    } catch(err){
        console.log(err)
    }
   
})

// update data
router.put("/update",async(req,res)=>{
    const {_id,Name,Age,City}=req.body;
      const savedUser=await InfoRouter.findOne({_id});
      console.log(savedUser);
      if(Name){
          savedUser.Name=Name
      }
      if(Age){
        savedUser.Age=Age
    }
    if(City){
        savedUser.City=City
    }
   await savedUser.save();
   console.log(savedUser)
   res.json({msg:"update sucess",updatedData:savedUser})
})

// delete
router.delete("/del/:id",async(req,res)=>{
    const {id} =req.params;
    const user=await InfoRouter.findById(id)
    if(!user){
        return res.json("User is not found")
    }
    user.remove();
    res.json({msg:"deleted successfully",deletedUser:user.Name})
})

module.exports=router;