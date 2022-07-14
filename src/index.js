const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");
const app = express();
const port = process.env.PORT ||7005

app.use(express.json())
app.use(cors());
const addtoCartController = require("./controller/adToCartController")

const userController = require("./controller/user.controller")
const vegitableController = require("./controller/veg.Contr")



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