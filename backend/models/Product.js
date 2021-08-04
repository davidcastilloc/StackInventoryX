const mongoose = require("mongoose");
const { Schema } = mongoose;

const TypeFoto = new Schema({
  url: String,
  base64: String,
  thumbnail: String,
  alt: String
})

const Product = new Schema({
  name: { type: String, default: "" },
  status: {type: Boolean, default:false},
  und: {type: String, default:""}, 
  foto: {type: TypeFoto},
  company: {type: Schema.ObjectId, ref: "company"},
  warehouse: {type: Schema.ObjectId, ref: "warehouse"}
});

module.exports = mongoose.model("product", Product);
