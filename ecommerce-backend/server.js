import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import productRouter from './routes/productRoute.js'
import userRouter from './routes/userRoute.js'
import cartRoute from './routes/cartRoutes.js';
import orderRouter from "./routes/orderRoute.js"

dotenv.config()
const app = express()

connectDB()

app.use(express.json())
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)})