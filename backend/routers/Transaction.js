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
    const moveR = await Transaction.find({ _id: req.params.id});
    var move = moveR[0].move;
    var onceReverse = moveR[0].onceReverse ;

    if(onceReverse === false){
      move = moveR[0].move * -1
      onceReverse = true;
    }
    const Update = { onceReverse, move };
    await Transaction.findByIdAndUpdate(req.params.id, Update);
    res.status(200).send("ok");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
