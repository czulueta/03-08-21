const mongoose = require("mongoose")
const Schema = mongoose.Schema

const interiorSchema = new Schema({
    customerName: {
        type: String,
        required: true
    },
    smallOrder: {
        type: String,
    },
    mediumOrder: {
        type: String,
    },
    bigOrder: {
        type: String,
    }
})

module.exports = mongoose.model("Interior", interiorSchema)