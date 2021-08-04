const router = require("express").Router();
const Bill = require("../models/Bill");
//const ArticleBill = require("../models/ArticleBill");

router.post("/createBill", async (req, res) => {
  try {
    const { company, subtotal, article, tax, total, date } = req.body;
    const newBill = new Bill({
      company,
      subtotal,
      article,
      tax,
      total,
      date,
    });
    await newBill.save();
    res.status(200).send(newBill);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
