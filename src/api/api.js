const express = require("express")
const router = express.Router()
const Transaction = require("../models/transactionSchema")


router.get("/transactions", async function (req, res) {
    const transactions = await Transaction.find({}, function (err, transactions) {
        res.send(transactions)
    })
})

router.post("/transaction", async function (req, res) {
    const transaction = new Transaction(req.body)
    await transaction.save()
    res.send(transaction)
})

router.delete("/transaction", async function (req, res) {
    let id = req.body.id
    const transaction = await Transaction.findByIdAndDelete(id, function(err, success){
        if (err){
            console.log(err)
        }
    })
    res.send(id)
})

module.exports = router
