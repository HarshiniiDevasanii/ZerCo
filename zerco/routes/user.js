const express=require('express')
const Usermodel=require('../models/usermodel')
const route=express.Router()
route.post('/login',async (req,res)=>{
    try{
        const {
            name,password
        }=req.body;
        const result= await Usermodel.find({
            name,password
        })
        if(result){
            return res.status(210).json({message : "User found"})
        }
        else{
            return res.status(407).json({message:"Not found"})
        }
    }
   catch(err){
        console.log(err);
   }
}
)
route.post("/signup",async (req,res)=>{
    try{
        const {name,password}=req.body;
        const result=await Usermodel.create({
            name,password
        })
        if(result){
            res.status(201).json({message:"User Registered Succesfully"})
        }
        else{
            res.status(404).json({message: "User not registered"})
        }
    }
    catch(err){
        console.log(err);
    }
})
module.exports=route