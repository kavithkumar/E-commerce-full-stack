const mongoose = require('mongoose')
const ProductsSchema = new mongoose.Schema({
    "id": { type: Number, required: true },
    "title": { type: String, required: true },
    "price": { type: Number, required: true },
    "description": { type: String, required: true },
    "category": { type: String, required: true },
    "image": { type: String, required: true }
})
//role-Admin/user
module.exports = mongoose.model('product', ProductsSchema)