const express = require('express')
const NodeCache = require('node-cache')

const storePayrollObject = require('./../modules/storePayrollObject')

const router = new express.Router()
const myCache = new NodeCache({ stdTTL: 1000, checkperiod: 120 });

router.post('/addToPayroll', async (req, res) => {

    myCache.get("myKey", async (err, cacheMem) => {
        if (cacheMem == undefined) {
            cacheMem = []
        }
        try {
            myCache.set("myKey", await storePayrollObject(req.body, cacheMem), 1000)
            res.status(200).send('Payslip Successfully Added')
        } catch (e) {
            res.status(400).send(e)
        }
    })
})

router.get('/readFromPayroll', async (req, res) => {

    myCache.get("myKey", (err, cacheMem) => {
        if (cacheMem == undefined) {
            res.status(200).send('Payroll DB empty')
        } else {
            res.status(200).send(cacheMem)
        }
    })
})

module.exports = router