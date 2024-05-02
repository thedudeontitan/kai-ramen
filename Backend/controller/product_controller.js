import Product from '../models/product_model.js';

export const createProduct = async (req, res) => {
    const { name, description, image, types } = req.body;

    if (!name || !description || !image || !types) {
        return res.status(400).json({ message: "Please provide all the fields" });
    }

    try {
        await Product.create({ name, description, image, types });
        return res.status(201).json({ message: "Product created successfully" });
    } catch (error) {
        console.error("Error creating product:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json(products);
    } catch (error) {
        console.error("Error getting products:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}