const mongoose = require('mongoose')
let schema = mongoose.Schema({
  userName: String,
  passWord: String,
  createTime: String,
  token: String
})
module.exports = mongoose.model(`user`, schema)