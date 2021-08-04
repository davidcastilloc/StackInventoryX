const router = require("express").Router();
const Plan = require("../models/Plan");

router.get("/allPlansCompany", async (req, res) => {
  try {
    const retrievePlanCompany = await Plan.find({});
    res.status(200).json({
      plansCompany: retrievePlanCompany,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/plansCompany/:company", async (req, res) => {
  try {
    const retrievePlanCompany = await Plan.find({ company: req.params.company });
    res.status(200).json({
      plansCompany: retrievePlanCompany,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/addPlanCompany", async (req, res) => {
  try {
    const { company, type, status } = req.body;
    const newPlanCompany = new Plan({
      company,
      type,
      status,
    });
    await newPlanCompany.save();
    res.status(200).send("ok");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/cancelPlanCompany/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const Update = { status };
    await Plan.findByIdAndUpdate(req.params.id, Update);
    res.status(200).send("ok");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
