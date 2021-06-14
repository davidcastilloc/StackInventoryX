const router = require("express").Router();
const Company = require("../models/Company");

router.get("/companys", async (req, res) => {
  try {
    const companysRetrieve = await Company.find({});
    res.status(200).json({
      Companys: companysRetrieve,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "not ok",
      error: error,
    });
  }
});

router.get("/company/:id", async (req, res) => {
  try {
    const companysRetrieve = await Company.findById({ _id: req.params.id });
    res.status(200).json({
      Company: companysRetrieve,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "not ok",
      error: error,
    });
  }
});

router.post("/addCompany", async (req, res) => {
  try {
    const { name, direction } = req.body;
    const newCompany = new Company({
      name,
      direction,
    });
    await newCompany.save();
    res.status(200).json({
      status: "ok",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "not ok",
      error: error,
    });
  }
});

router.put("/editCompany/:id", async (req, res) => {
  try {
    const { name, direction, status } = req.body;
    const Update = { name, direction };
    await Company.findByIdAndUpdate(req.params.id, Update);
    res.status(200).json({
      status: "ok",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "not ok",
      error: error,
    });
  }
});

router.delete("/deleteCompany", async (req, res) => {
  try {
    const { delete_ } = req.body;
    await Company.findByIdAndRemove({ _id: delete_ });
    res.status(200).json({
        status: "ok"
    })
  } catch (error) {
      console.error(error);
      res.status(500).json({
          status: "not ok",
          error: error
      })
  }
});

module.exports = router;
