const express = require('express');
const dotenv = require('dotenv');
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 2000;
const cors = require('cors')

// routes
const adminRoutes = require('./routes/admin/auth')
const userRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart')


// mongodb connection
mongoose.connect('mongodb://localhost:27017/ecommerceapp', {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('La base de datos esta conectada')
})
// enviroment variables
dotenv.config()


// middlewares
app.use(cors())
app.use(express.json())
app.use('/public', express.static(path.join(__dirname, 'uploads')))
app.use('/api', userRoutes)
app.use('/api', adminRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)
app.use('/api', cartRoutes)


console.log(port)
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})