const mongoose = require("mongoose");
const { Schema } = mongoose;

const Employee = new Schema({
    name: {type: String, default: ""},
    email: { type: String, default:""},
    company:{type: String, default:""},
    status: {type: Boolean, default: true}
})

module.exports = mongoose.model('employee', Employee);