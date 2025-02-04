const  mongoose=require('mongoose')
const users= new mongoose.Schema({
    name:String,
    password:String
})
const Usermodel=mongoose.model('userzerco',users)
module.exports=Usermodel