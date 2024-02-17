const Customer = require('../models/customer')
const jwt = require('jsonwebtoken')

const register = async(req, res)=> {
    const customer = req.body;
    try {
        const createdCustomer = await Customer.create(customer)
        res.status(200).json(createdCustomer)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ 'message': error.message })
    }
}
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const customer = await Customer.findOne({ 'email': email, 'password': password })
        if (!customer)
            res.status(401).json({ 'msg': 'Invalid email/password' })
        else {
            //Generate Json Web Token
            const { email, username} = customer;
            const token = jwt.sign({ email, username}, process.env.JSON_SECRETKEY, { expiresIn: '1800s' })
            res.status(200).json(token)
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports = {login,register}