const express = require("express");
const path = require("path");
require("dotenv").config();
const router=express.Router()


const shortid = require("shortid");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.SECRET_KEY,
});


// Serving company logo
router.get("", (req, res) => {            ///////////////////////logo
  res.sendFile(path.join(__dirname, "pay.jpg"));
});

router.post("", async (req, res) => {            ////////razorpay
  const payment_capture = 1;
  const amount = req.query.price;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

