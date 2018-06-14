const mongoose = require('mongoose')
let schema = mongoose.Schema({
  systemName: String,
  systemDomain: String,
  slowPageTime: String,
  slowJsTime: String,
  slowCssTime: String,
  slowImgTime: String,
  userId: String,
  script: String,
  appId: String,
  createTime: String
})
module.exports = mongoose.model(`system`, schema)