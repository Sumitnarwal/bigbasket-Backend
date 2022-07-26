const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");
const app = express();
const port = process.env.PORT ||7005

app.use(express.json())
app.use(cors());
const addtoCartController = require("./controller/adToCartController")
const login=require("./login")
const userController = require("./controller/user.controller")
const vegitableController = require("./controller/veg.Contr")
const payment=require("./paymentRozerpay")
const register=require("./register")


app.use("/logo",payment)
app.use("/razorpay",payment)

app.use("/login",login)
app.use("/register",register)

app.use("/softdrink", userController)
app.use("/veg", vegitableController)
app.use("/addtocart", addtoCartController)
 


app.listen(port, async () => {
    try {
        await connect();
        console.log("listing on port 7005")
    } catch (err) {
        console.log(err.message);
    }

})
