const mongoose = require('mongoose')
require('mongoose-moment')(mongoose)
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/performance')
let db = mongoose.connection
db.once('open', console.log.bind(console, 'connection success.'))
db.on('error', err => {
  console
    .error
    .bind(console, `connection error: ${err}`)
  process.exit(-1)
})

module.exports = db