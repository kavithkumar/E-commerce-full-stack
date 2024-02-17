const CustomApiError = require('../error/customApiError');
const product = require('../models/product')

const createProduct = async (req, res) => {
    console.log(req.product)
    try {
        const prd = await product.create(req.body);
        res.status(201).json(PeriodicWave)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}
const getAllProducts = async (req, res) => {
    try {
        let products = await product.find();
        products = products.sort((p1, p2) =>
            p1.name.localeCompare(p2.name))
        res.status(200).json(products)
    }
    catch (err) {
        res.status(500).json(err)
    }
}

const updateProduct = async (req, res, next) => {
    const productId = req.params.id;
    try {
        console.log(req.body);
        const updatedPrd = await product.findByIdAndUpdate(productId, req.body, { new: true });
        if (!updatedPrd)
            next(new CustomApiError(`cannot be updated...${productId} doesnt exist..`, 400))
        else
            res.status(200).json(updatedPrd);
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

const deleteProductById = async (req, res, next) => {
    const productId = req.params.id;
    try {
        const result = await product.deleteOne({ _id: productId })
        if (result.deletedCount === 0)
            next(new CustomApiError(`${productId} doesnt exist`, 400))
        else
            res.status(200).json({ "message": "Deleted Successfully..." })
    }
    catch (err) {
        res.status(500).json(err)
    }
}
module.exports = { createProduct, getAllProducts, updateProduct, deleteProductById }