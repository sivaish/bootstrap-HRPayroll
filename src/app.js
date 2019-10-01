const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

const publicDirectoryPath = path.join(__dirname, './frontEnd/public')
const viewPath = path.join(__dirname, './frontEnd/templates/views')
const partialPath = path.join(__dirname, './frontEnd/templates/partials')

const FrontRouter = require('./frontEnd/router/routes')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicDirectoryPath))
app.use(FrontRouter)

const router = require('./backEnd/router/router')

app.use(express.json())
app.use(router)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server us up in port ${port}`)
})

module.exports = app