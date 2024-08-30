import { model, Schema } from "mongoose";

export interface IProduct {
    name: string,
    description: string,
    price: number,
    category: string
    stock: number
};

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true }
});

export default model('product', productSchema);