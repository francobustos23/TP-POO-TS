import { model, Schema } from "mongoose";

interface User {
    user: string,
    email: string,
    password: string,
    role: number
}

const userSchema = new Schema({
    user: String,
    email: String,
    password: String,
    role: Number
},{
    timestamps: true,
})

export default model('user', userSchema);
