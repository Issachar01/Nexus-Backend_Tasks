import express from 'express'
import {getAllProducts, createProduct, getProductByID, deleteProduct, updateProduct} from '../controllers/productController.js'

const productRouter = express.Router()

productRouter.get('/', getAllProducts)
productRouter.post('/', createProduct)
productRouter.get('/:id', getProductByID)
productRouter.delete('/:id', deleteProduct)
productRouter.patch('/:id', updateProduct)

export default productRouter

