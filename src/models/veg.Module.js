
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    iid: { type: Number, required: true },
    
    company: { type: String, required: true },
    title: { type: String, required: true },
    size: { type: Number, required: true },
    star: { type: Number, required: true },
    rating: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  {
    versionKey: false,

  }
);

module.exports = mongoose.model("fruits", userSchema); 
