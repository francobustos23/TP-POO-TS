import { Request, Response } from "express";
import userService from "../Services/userService";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.findAll();
        return res.json(users);
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    };
};