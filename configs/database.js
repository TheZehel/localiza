const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

const db = {}
db.mongoose = mongoose
db.url = 'mongodb://user:password@0.0.0.0:27017/localizadb?authSource=admin'

module.exports = db; 