const express = require("express");

const mongoose = require("mongoose");
const app = express();
//app.use(express.json());
const User=require("./models/loginSchema")
app.use(express.urlencoded());
const router = express.Router();
//Model and schema


//Routesconsole.log("pres")
//const User = mongoose.model("User", UserSchema);
router.post("", async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password == user.password) {
        res.send({ message: "Login Successfully", user: user })
      } else {
        res.send({ message: "Invalid Password" })
      }
    } else {
      res.send({ message: "User is not Registerd" })
    }
  })
});



module.exports = router;
