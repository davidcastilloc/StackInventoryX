const router = require("express").Router();
const Bill = require("../models/Bill");

router.get("/allBills", async (req, res) => {
  try {
    const billsRetrieve = await Bill.find({});
    res.status(200).json({
      Bills: billsRetrieve,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/oneBill/:id", async (req, res) => {
  try {
    const billsRetrieve = await Bill.find({ _id: req.params.id});
    res.status(200).json({
      Bills: billsRetrieve,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});


router.get("/billsByCompany/:company", async (req, res) => {
  try {
    const billsRetrieve = await Bill.find({ company: req.params.company });
    res.status(200).json({
      Bills: billsRetrieve,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

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

router.put("/cancelBill/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const Update = { status };
    await Bill.findByIdAndUpdate(req.params.id, Update);
    res.status(200).send("ok");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
