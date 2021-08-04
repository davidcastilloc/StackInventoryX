const router = require("express").Router();
const Product = require("../models/Product");

router.get("/allProducts", async (req, res) => {
  try {
    const retrieveProducts = await Product.find({});
    res.status(200).json({
      products: retrieveProducts,
    });
  } catch (error) {
    console.log.log(error);
    res.status(500).send(error);
  }
});

router.get("/oneProduct/:id", async (req, res) => {
  try {
    const retrieveProducts = await Product.find({ _id: req.params.id });
    res.status(200).json({
      products: retrieveProducts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/productByCompany/:company", async (req, res) => {
  try {
    const idCompany = req.params.company;
    const retrieveProducts = await Product.find({ company: idCompany });
    res.status(200).json({
      products: retrieveProducts,
    });
  } catch (error) {}
});

router.post("/createProduct", async (req, res) => {
  try {
    const { name, und, foto, company } = req.body;
    const newProduct = new Product({
      name,
      und,
      foto,
      company,
    });
    await newProduct.save();
    res.status(200).send("ok");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/editProduct/:id", async (req, res) => {
  try {
    const { name, und, foto, company } = req.body;
    const Update = { name, und, foto, company };
    await Product.findByIdAndUpdate(req.params.id, Update);
    res.status(200).send("ok");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete("/deleteProduct", async (req, res) => {
  try {
    const { _id_ } = req.body;
    await Product.findByIdAndRemove({_id: _id_});
    res.status(200).send("ok");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
