const mongoose = require('mongoose');

const Data = new mongoose.Schema({
    name: { type: String }
})

module.exports = mongoose.model('data', Data)