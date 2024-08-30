import { model, Schema } from "mongoose";

export interface ICart {
    user: string,
    products: [
        {
            product: string,
            quantity: number
        }
    ]
};

const cartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: 'products'
            },
            quantity: Number
        }
    ]
}, {
    timestamps: true
});

export default model('cart', cartSchema)