const express = require('express');
const route = express.Router();
const payments = require('../models/paymentmodel'); // Assuming it's a Mongoose model

route.post('/pay', async (req, res) => {
  try {
    const { amount, date, method, upiId, cardNumber, bankName, accountNumber } = req.body;
    
    const paymentData = { amount, date, method };

    if (method === "upi") paymentData.upiId = upiId;
    if (method === "card") paymentData.cardNumber = cardNumber;
    if (method === "netbanking") {
      paymentData.bankName = bankName;
      paymentData.accountNumber = accountNumber;
    }

    // Create the payment record in the database
    const result = await payments.create(paymentData);

    // Check if the payment creation was successful
    if (result) {
      // Send a success response to the client
      res.json({ success: true, message: 'Payment Successful!' });
    } else {
      // Send a failure response if payment creation failed
      res.json({ success: false, message: 'Payment failed. Please try again.' });
    }
  } catch (error) {
    console.error('Error:', error);
    // Send an error response to the client
    res.json({ success: false, message: 'Unable to process payment. Please try again.' });
  }
});

module.exports = route;
