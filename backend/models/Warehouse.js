const mongoose = require("mongoose");
const { Schema } = mongoose;

const Warehouse = new Schema({
  addresse: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  company: { type: Schema.ObjectId, ref: "company" },
  status: { type: Boolean, default: false },
});

module.exports = mongoose.model("warehouse", Warehouse);
