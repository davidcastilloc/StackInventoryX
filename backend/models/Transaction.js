const mongoose = require("mongoose");
const { Schema } = mongoose;

const Transaction = new Schema({
  company: { type: Schema.ObjectId, ref: "company" },
  employee: { type: Schema.ObjectId, ref: "employee" },
  move: { type: Number, default: 0 },
  product: { type: Schema.ObjectId, ref: "product" },
  warehouse: { type: Schema.ObjectId, ref: "warehouse" },
  onceReverse: { type: Boolean, default: false },
});

module.exports = mongoose.model("transaction", Transaction);
