const express = require("express")
const interiorRouter = express.Router()
const Interior = require("../models/interior.js")

interiorRouter.get("/", (req, res, next) => {
    Interior.find((err, info) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(info)
    })
})

interiorRouter.post("/", (req, res, next) => {
    const newOrder = new Interior(req.body)
    newOrder.save((err, savedInfo) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInfo)
    })
})

interiorRouter.delete("/:orderId", (req, res, next) => {
    Interior.findOneAndDelete({ _id: req.params.orderId}, (err, deletedOrder) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`successfully deleted ${deletedOrder.customerName}`)
    })
})

module.exports = interiorRouter

