
const express = require("express");
const User = require("../models/addtoCart");
const router = express.Router();



router.get("", async (req, res) => {
  try{
  const user = await User.find().lean().exec();
  return res.send(user);
} catch (err) {
  return res.status(500).send({ message: err.message })
}
});

router.post("", async (req, res) => {

  try {
    const users = await User.create(req.body);
    return res.send(users);
  } catch (err) {
    return res.status(500).send({ message: err.message })
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();

    res.send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;