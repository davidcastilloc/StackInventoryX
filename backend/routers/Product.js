const router = require("express").Router();
const Product = require("../models/Product");

router.post("/createProduct", async (req, res) => {
  try {
    const { name, und, foto, company } = req.body;
    const newProduct = new Product({
      name,
      und,
      foto,
      company,
    });
    res.status(200).send(newProduct);
  } catch (error) {
      console.log(error);
      res.status(500).send(error);
  }
});

module.exports = router ;
