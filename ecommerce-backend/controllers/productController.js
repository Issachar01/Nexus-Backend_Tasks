import Product from "../models/Product.js"

export const getAllProducts = async(req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({products})
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

export const createProduct = async (req, res) => {
    try {
        const newProductAdded = await Product.create(req.body)
        res.status(201).send(newProductAdded)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
}

export const getProductByID = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).send(product)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const deletedProduct = await Product.findByIdAndDelete(id)
        if(!deletedProduct) return res.status(404).json({message: "Product not found"})
        res.status(200).send("Product deleted successfully!")
    } catch(err) {
        res.status(500).json({message: err.message})
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { runValidators: true })
        if (!updatedProduct) return res.status(404).json({message: "Product not found"})
        res.status(200).send(updatedProduct)
    } catch (err) {
        res.status(500).json({message: err.message})
    } 
}
