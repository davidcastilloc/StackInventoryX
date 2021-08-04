const mongoose = require("mongoose");
const { Schema } = mongoose;

const ResponsableCompany = new Schema({
  firstName: String,
  lastName: String,
  phone: String,
});

const Company = new Schema({
  name: { type: String, default: "" },
  address: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  zip: { type: String, default: "" },
  status: { type: Boolean, default: true },
  responsable: { type: ResponsableCompany },
  data: {type: Date, default: Date.now}
});

module.exports = mongoose.model("company", Company);
