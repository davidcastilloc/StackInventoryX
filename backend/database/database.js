const mongoose = require("mongoose");

mongoose
  .connect("mongodb://db/inventory", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is On"))
  .catch((err) => console.error(err));

module.exports = mongoose;
