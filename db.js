const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test-mongodb', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection


db.once('open', () => {
  console.log('connect success')
})
db.on('error', () => {
  console.error('connect error')
})