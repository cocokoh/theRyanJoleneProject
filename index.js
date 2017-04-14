require('dotenv').config({ silent: true })
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

var dbURI = process.env.PROD_MONGODB || 'mongodb://localhost/theryanjoleneproject'
mongoose.connect(dbURI)
mongoose.Promise = global.Promise

app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
  res.render('./home')
})
app.post('/', function(req, res) {
  console.log(req.body)
  // if (req.body.type === 'signup') {
  //   res.send(req.body)
  // }
})

// app.use('/', require('./routes/user_router'))

// app.use('/', require('./controllers/auth'))

app.listen(process.env.PORT)
