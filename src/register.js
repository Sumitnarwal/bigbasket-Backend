const express = require("express");
//const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const User=require("./models/loginSchema")
app.use(express.urlencoded());
const router = express.Router();
//Model and schema



router.post("", async (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already exist" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save(err => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Register" });
        }
      });
    }
  });
});

module.exports = router
