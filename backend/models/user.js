const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    "username": { type: String, required: true },
    "email": { type: String, required: true },
    "password": { type: String, required: true },
    "role": { type: String, required: true, enum: ['admin', 'user'] }
})
//role-Admin/user
module.exports = mongoose.model('User', UserSchema)