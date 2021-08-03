const mongoose = require("mongoose");
const { Schema } = mongoose;

const Plan = new Schema({
  company: { type: Schema.ObjectId, ref: "company" },
  type: { type: String, enum: ["0", "1", "2", "3"], default: "3" },
  status: { type: Boolean, default: true}
});

module.exports = mongoose.model("plan", Plan);
