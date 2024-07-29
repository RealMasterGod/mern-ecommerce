const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const stripeRoute = require('./routes/stripe')
const cors = require('cors')

app.use(express.json())
app.use(cors())

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
}

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/product', productRoute)
app.use('/api/cart', cartRoute)
app.use('/api/order', orderRoute)
app.use('/api/checkout', stripeRoute)


app.listen(process.env.PORT || 5000, () => {
    console.log('Server running on port 5000...')
})