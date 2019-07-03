const mongoose = require('mongoose')
const url = `mongodb://root:hZTaEKz67SpNKXZ@ds345937.mlab.com:45937/chat`

mongoose.set('useCreateIndex', true);

mongoose.connection.on('open', ref => {
  console.log('Connected to mongo server.')
})

mongoose.connection.on('error', err => {
  console.log(err)
})

mongoose.connect(url, { useNewUrlParser: true })

module.exports = mongoose;