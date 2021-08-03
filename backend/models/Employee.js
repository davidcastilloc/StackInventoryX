const mongoose = require("mongoose");
const { Schema } = mongoose;

const Employee = new Schema({
  name: { type: String, default: "" },
  email: { type: String, default: "" },
  company: {type: Schema.ObjectId, ref: "company"},
  role: { type: String, enum: ["0", "1", "2"], default: "2" },
  status: { type: Boolean, default: true },
});

module.exports = mongoose.model("employee", Employee);
