import { Request, Response } from "express";
import userService from "../Services/UserService";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.findAll();
        return res.json(users);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    };
};

export const createUser = async (req: Request, res: Response) => {
    try {
        await userService.createUser(req.body);
        return res.status(201).json({ message: 'User Created ' + req.body });
    } catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}
export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        await userService.update(id, updateData)
        if(!updateUser) {
            return res.status(404).json({
                message: 'User not found'
            })
        }
        return res.status(200).json({
            message: 'User Update'
        })
    } catch (err: any) {
        return res.status(500).json({
            message: err.message
        })
    }
}
export const deleteUser = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {
        const deleteUser = await userService.delete(id);
        if (!deleteUser) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        return res.json({ message: 'User deleted' })
    } catch (err: any) {
        return res.status(500).json({
            message: err.message
        });
    }
}