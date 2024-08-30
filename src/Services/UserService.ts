import User from "../Models/User";
import { User as Us } from '../Models/User';

export type ID = string | number;

class UserService {
    constructor() { };

    async findAll() {
        return await User.find();
    };

    async createUser(user: Us) {
        return await User.create(user);
    };

    async update(id: ID, updateData: Us) {
        const updateUser = await User.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });

        if (!updateUser) {
            return null;
        };

        return updateUser;
    };

    async delete(id: ID) {
        return await User.findByIdAndDelete(id);
    };
};

export default new UserService();