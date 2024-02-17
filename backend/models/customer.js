const mongoose = require('mongoose')
const CustomerSchema = new mongoose.Schema({
    "username": { type: String, required: true },
    "email": { type: String, required: true },
    "password": { type: String, required: true }
})
//role-Admin/user
module.exports = mongoose.model('Customer', CustomerSchema)