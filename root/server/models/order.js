const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    title: String,
    namePet: String,
    age: Number,
    nameUser: String,
    address: String,
    city: String,
    state: String,
})

module.exports = mongoose.model('order',orderSchema)

