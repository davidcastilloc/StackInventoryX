const router = require("express").Router();
const Transaction = require("../models/Transaction");

router.get("/allTransactions", async (req, res) => {
  try {
    const retrieveTransactions = await Transaction.find({});
    res.status(200).json({
      transactions: retrieveTransactions,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/transactionsByCompany/:company", async (req, res) => {
  try {
    const retrieveTransactions = await Transaction.find({
      company: req.params.company,
    });
    res.status(200).json({
      transactions: retrieveTransactions,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/addTransactions", async (req, res) => {
  try {
    const { company, employee, move, product, warehouse } = req.body;
    const newTransaction = new Transaction({
      company,
      employee,
      move,
      product,
      warehouse,
    });
    await newTransaction.save();
    res.status(200).send("ok");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/reverseTransactions/:id", async (req, res) => {
  try {
    const { onceReverse } = req.body;
    const Update = { onceReverse };
    await Transaction.findByIdAndUpdate(req.params.id, Update);
    res.status(200).send("ok");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
