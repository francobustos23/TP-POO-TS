import Cart, { ICart } from "../Models/Cart";
import { ID } from "./UserService";

class cartService {
    constructor() {}

    async findAll() {
        return await Cart.find();
    }

    async createCart(cart: ICart) {
        return await Cart.create(cart);
    }

    async update(id: ID, updateData: ICart) {
        const updateCart = await Cart.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });
        if(!updateCart) {
            return null;
        }
        return updateCart;
    };

    async delete(id: ID) {
        return await Cart.findByIdAndDelete(id);
    }

}

export default new cartService();