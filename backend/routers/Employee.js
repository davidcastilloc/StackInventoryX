const router = require("express").Router();
const Employee = require("../models/Employee");
const Company = require("../models/Company");

router.get("/employees", async (req, res) => {
  try {
    const employeeRetrieve = await Employee.find({});
    res.status(200).json({
      Employees: employeeRetrieve,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "not ok",
      error: error,
    });
  }
});

router.get("/employee/:id", async (req, res) => {
  try {
    const employeeRetrieve = await Employee.find({ _id: req.params.id });
    res.status(200).json({
      Employee: employeeRetrieve,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "not ok",
      error: error,
    });
  }
});

router.get("/employeeEmail", async (req, res) => {
  try {
    const {email_} = req.body
    const employeeRetrieve = await Employee.find({ email: email_ });
    res.status(200).json({
      Employee: employeeRetrieve,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "not ok",
      error: error,
    });
  }
});


router.get("/employeeCompany/:company", async (req, res) => {
  try {
    const companyRetrieve = await Company.findOne({_id: req.params.company});
    const employeeRetrieve = await Employee.find({ company: req.params.company });
    res.status(200).json({
      Employee: employeeRetrieve,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "not ok",
      error: error,
    });
  }
});

router.post("/addEmployee", async (req, res) => {
  try {
    const { name, email, company, role } = req.body;
    const newEmployee = new Employee({
      name,
      email,
      company,
      role, 
    });
    await newEmployee.save();
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

router.put("/editEmployee/:id", async (req, res) => {
  try {
    const { name, email, company, role, status } = req.body;
    const update_ = { name, email, company, role,  status };
    await Employee.findByIdAndUpdate(req.params.id, update_);
    res.status(200).json({
        status: "ok"
    })
  } catch (error) {
      console.error(error);
      res.status(500).json({
          status:"not ok",
          error: error
      })
  }
});

router.delete("/deleteEmployee", async(req, res)=>{
    try {
        const {delete_} = req.body;
        await Employee.findByIdAndRemove({_id: delete_});
        res.status(200).json({
            status: "ok"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "not ok",
            error: error
        })
    }
})

module.exports = router;
