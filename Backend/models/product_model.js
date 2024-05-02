import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    types: [
        {
            typeName: String,
            prize: Number,
        }
    ],
})

const Product = mongoose.model('Product', ProductSchema);

export default Product;