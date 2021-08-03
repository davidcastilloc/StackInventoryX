const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/inventory", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is On"))
  .catch((err) => console.error(err));

module.exports = mongoose;
