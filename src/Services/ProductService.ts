import Product, { IProduct } from "../Models/Product";
import { ID } from "./UserService";

class ProductService {
    constructor() {};

    async findAll() {
        return await Product.find();
    };

    async createProduct(product: IProduct) {
        return await Product.create(product)
    };

    async update(id: ID, updateData: IProduct) {
        const updateProduct = await Product.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });

        if(!updateProduct) {
            return null
        };

        return updateProduct;
    };

    async delete(id:ID) {
        return await Product.findByIdAndDelete(id)
    };
};

export default new ProductService();