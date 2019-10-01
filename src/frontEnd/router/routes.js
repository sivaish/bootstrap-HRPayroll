const express = require('express')

const frouter = new express.Router()

frouter.get('/', (req, res) => {

    res.render('home', {
        title: 'HR Payroll app',
        name: 'Siva'
    })
})

frouter.get('/payslip', (req, res) => {

    res.render('payslip', {
        title: 'HR Payroll app',
        name: 'Siva'
    })
})

module.exports = frouter