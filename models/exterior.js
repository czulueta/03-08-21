const mongoose = require("mongoose")
const Schema = mongoose.Schema 

const exteriorSchema = new Schema({
    customrerName: {
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
module.exports = mongoose.model("Exterior", exteriorSchema)