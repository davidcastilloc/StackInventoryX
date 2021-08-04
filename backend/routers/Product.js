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
  } catch (error) {}
});
