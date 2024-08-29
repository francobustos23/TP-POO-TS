import { model, Schema } from "mongoose";

export interface User {
    user: string,
    email: string,
    password: string,
    role: string
}

const userSchema = new Schema<User>({
    user: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true}
},{
    timestamps: true
})

export default model<User>('user', userSchema);
