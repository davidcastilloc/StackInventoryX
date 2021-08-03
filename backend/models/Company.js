const mongoose = require("mongoose");
const { Schema } = mongoose;

const Company = new Schema({
  name: { type: String, default: "" },
  direction: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  zip: { type: String, default: "" },
  status: { type: Boolean, default: true },
  strapiAcc: { type: String, default: "" },
});

module.exports = mongoose.model("company", Company);
