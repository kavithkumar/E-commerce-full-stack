const express = require('express')
const cors = require('cors');
const { connectDB } = require('./util/database');
const userRouter = require('./routes/user-routes');
const customerRouter = require('./routes/customer-routes');
const productRouter = require('./routes/product-routes');
const errorHandler = require('./error/error-handler');

require('dotenv').config()
const app = express();
app.use(express.json())
app.use(cors())

app.use('/user', userRouter)
app.use('/customer', customerRouter)
app.use('/products', productRouter)
app.use(errorHandler)

const start = async () => {
    try {
        const connect = await connectDB();
        // console.log(connect)
        app.listen(8081, () => {
            console.log("server is listening at port number 8081")
        })
    }
    catch (err) {
        console.log(err)
    }
}
start()
