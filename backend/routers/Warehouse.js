const router = require("express").Router();
const Warehouse = require("../models/Warehouse");

router.get("/allWarehouse", async (req, res) => {
  try {
    const retrieveWarehouse = await Warehouse.find({});
    res.status(200).json({
      Warehouse: retrieveWarehouse,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/warehouseByCompany/:company", async (req, res) => {
  try {
    const idCompany = req.params.company;
    const retrieveWarehouse = await Warehouse.find({ company: idCompany });
    res.status(200).json({
      Warehouse: retrieveWarehouse,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/addWarehouse", async (req, res) => {
  try {
    const { addresse, city, state, company, status } = req.body;
    const newWarehouse = new Warehouse({
      addresse,
      city,
      state,
      company,
      status,
    });
    await newWarehouse.save();
    res.status(200).send("ok");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/editWarehouse/:id", async (req, res) => {
  try {
    const { addresse, city, state, company, status } = req.body;
    const Update = { addresse, city, state, company, status };
    await Warehouse.findByIdAndUpdate(req.params.id, Update);
    res.status(200).send("ok");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete("/deleteWarehouse", async (req, res)=>{
    try {
        const { _id_ } = req.body;
        await Warehouse.findByIdAndDelete({_id: _id_});
        res.status(200).send("ok");
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

module.exports = router;
