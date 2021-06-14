const mongoose = require("mongoose");
const { Schema } = mongoose;

const Company = new Schema({
    name: {type: String, default: ""},
    direction: { type: String, default:""},
    status: {type: Boolean, default: true}
})

module.exports = mongoose.model('company', Company);