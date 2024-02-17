const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProductById } = require('../controllers/productcontroller');
const router = express.Router();

router.post('/', createProduct)
router.get('/', getAllProducts)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProductById)

module.exports = router