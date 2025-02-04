const mongoose=require("mongoose")
const payments=new mongoose.Schema({
    amount: { type: String, required: true },
    date:{ type: String, required: true },
  method: { type: String, required: true },
  upiId: { type: String },
  cardNumber: { type: String },
  bankName: { type: String },
  accountNumber: { type: String },
})
const paymentmodel=mongoose.model('payment',payments)
module.exports=paymentmodel