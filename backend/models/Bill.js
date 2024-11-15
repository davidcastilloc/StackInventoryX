const mongoose = require("mongoose");
//const ArticleBill = require("./ArticleBill");
const { Schema } = mongoose;

const ArticleBill = new Schema({
  product: { type: Schema.ObjectId, ref: "product" },
  amount: Number,
  price: Number
})

const Bill = new Schema({
  company: { type: Schema.ObjectId, ref: "company" },
  subtotal: {type: Number, default: 0 },
  article: {type: [ArticleBill]},
  tax: {type: Number, default: 0},
  total: {type:Number, default: 0},
  date: {type: Date, default: Date.now},
  status: {type: Boolean, default: true}
  
});

module.exports = mongoose.model("bill", Bill);
